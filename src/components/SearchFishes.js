import React, { useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { fishListOptions, fetchData } from '../utils/fetchData';

const SearchFishes = ({ setFishes }) => {
    const [search, setSearch] = useState('');

    const handleSearch = async () => {
        if (search) {
            const fishesData = await fetchData('https://list-of-freshwater-aquarium-fish-species.p.rapidapi.com/species', fishListOptions);

            const searchedFishes = fishesData.filter(
                (item) => item.name.toLowerCase().includes(search)
                    || item.taxonomy.toLowerCase().includes(search)
                    || item.size.toLowerCase().includes(search)
                    || item.about.toLowerCase().includes(search),
            );

            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

            setSearch('');
            setFishes(searchedFishes);
        }
    };

    return (
        <Stack
            alignItems="center"
            mt="37px"
            justifyContent="center"
            p="20px"
        >
            <Typography
                fontWeight={700}
                sx={{
                    fontSize: { lg: '44px', xs: '30px' }
                }}
                mb="49px"
                textAlign="center"
            >
                Awesome Fishes You <br /> Should Know
            </Typography>
            <Box
                position="relative"
                mb="72px">
                <TextField
                    height="76px"
                    sx={{
                        input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
                        width: { lg: '1170px', xs: '350px' },
                        backgroundColor: '#fff',
                        borderRadius: '40px'
                    }}
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    placeholder="Search Exercises"
                    type="text"
                />
                <Button
                    className="search-btn"
                    sx={{
                        bgcolor: '#64b5f6',
                        color: '#fff',
                        textTransform: 'none',
                        width: { lg: '173px', xs: '80px' },
                        height: '56px',
                        position: 'absolute',
                        right: '0px',
                        fontSize: { lg: '20px', xs: '14px' }
                    }}
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </Box>
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    p: '20px'
                }}
            >
            </Box>
        </Stack>
    );
};

export default SearchFishes;