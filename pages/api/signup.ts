import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cookie from 'cookie';
import prisma from '../../lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const salt = bcrypt.genSaltSync()
    const { email, password } = req.body

    let user

    try {
        user = await prisma.user.create({
            data: {
                email,
                password: bcrypt.hashSync(password, salt),
            },
        })
    } catch (e) {
        res.status(401)
        res.json({ error: 'User already exists' })
        return
    }

    const token = jwt.sign({
        email: user.email,
        id: user.id,
        time: Date.now()
    }, 
    'hello',
    { expiresIn: '8h' }
    )
}