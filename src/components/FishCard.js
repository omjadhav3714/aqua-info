import React from 'react'
import { Button, Typography, Card, CardContent, CardMedia } from '@mui/material'
import fishImg from './../assets/fish.png'
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';

const FishCard = ({ fish }) => {
    const [open, setOpen] = React.useState(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '1px solid #000',
        boxShadow: 50,
        p: 4,
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Card sx={{ display: 'flex' }}>
                <CardContent sx={{ flex: 1 }}>
                    <Typography component="h2" variant="h5">
                        {fish.name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        {fish.taxonomy}
                    </Typography>
                    <Button color="primary" onClick={handleClickOpen}>
                        View More
                    </Button>
                </CardContent>
                <CardMedia
                    component="img"
                    sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                    image={fish.imageURL ? fish.imageURL : fishImg}
                    alt={fish.imageLabel}
                />
            </Card>
            <Modal onClose={handleClose} open={open}>
                <Card sx={style} >
                    <CardMedia
                        component="img"
                        image={fish.imageURL ? fish.imageURL : fishImg}
                        alt={fish.imageLabel}
                    />
                    <CardContent>
                        <Typography component="h2" variant="h5">
                            Name :  {fish.name}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            Scientific Name : {fish.taxonomy}
                        </Typography>
                        <Divider />
                        <Typography >
                            About : {fish.about ? fish.about : "No about data"}
                        </Typography>
                        <Typography >
                            Size : {fish.size ? fish.size : "No data"}
                        </Typography>
                        <Typography >
                            Temperature : {fish.temprange ? fish.temprange : "No data"}
                        </Typography>
                        <Typography >
                            Ph range : {fish.phRange ? fish.phRange : "No data"}
                        </Typography>
                    </CardContent>

                </Card>

            </Modal>
        </>
    )
}

export default FishCard