/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination'
import { Box, Stack, Typography } from '@mui/material'
import { fishListOptions, fetchData } from '../utils/fetchData'
import FishCard from './FishCard';

const Fishes = ({ fishes, setFishes }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const fishesPerPage = 9;

    const indexOfLastFish = currentPage * fishesPerPage;
    const indexOfFirstFish = indexOfLastFish - fishesPerPage;
    const currentFish = fishes.slice(indexOfFirstFish, indexOfLastFish);

    const paginate = (e, value) => {
        setCurrentPage(value);
        window.scrollTo({ top: 1800, behaviour: 'smooth' })
    }

    useEffect(() => {
        const fetchFishData = async () => {
            let fishData = [];
            fishData = await fetchData('https://list-of-freshwater-aquarium-fish-species.p.rapidapi.com/species', fishListOptions);
            setFishes(fishData);
        }
        fetchFishData();
    }, [])

    return (
        <Box
            id="fishes"
            sx={{
                mt: { lg: '10px' }
            }}
            mt="10px"
            p="20px"
        >
            <Typography
                variant="h3"
                mb="46px"
            >
                Showing Results
            </Typography>
            <Stack
                direction="row"
                sx={{
                    gap: { lg: '110px', xs: '50px' }
                }}
                flexWrap="wrap"
                justifyContent="center"
            >
                {currentFish.map((fish, index) => (
                    <FishCard
                        key={index}
                        fish={fish}
                    />
                ))}
            </Stack>
            <Stack
                mt="100px"
                alignItems="center"
            >
                {fishes.length > 9 && (
                    <Pagination
                        color="standard"
                        shape="rounded"
                        defaultPage={1}
                        count={Math.ceil(fishes.length / fishesPerPage)}
                        page={currentPage}
                        onChange={paginate}
                        size="large"
                    />
                )}
            </Stack>
        </Box>
    )
}

export default Fishes