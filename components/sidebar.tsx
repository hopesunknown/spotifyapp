import { Box, List, ListItem, ListIcon, Divider, Center, LinkBox, LinkOverlay } from '@chakra-ui/layout';
import { MdHome, MdSearch, MdLibraryMusic, MdPlaylistAdd, MdFavorite } from 'react-icons/md';
import NextImage from 'next/image';

export default function Sidebar() {
    return (
        <Box 
            width='100%' 
            height='calc(100vh - 100px)' 
            bg='black' 
            paddingX='5px' 
            color='gray'
        >
            <Box paddingY="20px">
                <Box width="120px" marginBottom="20px" paddingX="20px"></Box>
            </Box>
        </Box>
    )
}