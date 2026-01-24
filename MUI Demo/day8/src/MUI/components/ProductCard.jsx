import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Box } from '@mui/material';

export default function ActionAreaCard({allProducts}) {
  return (
    <Box sx={{display:'flex', flexWrap:'wrap', justifyContent:'center',gap:2, m:2}}>
        {allProducts.map((product,index) =>(
          <Box key={index}>
            <Card  sx={{ maxWidth: 345,height:400 }}>
          <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={product.pimageUrl}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.pname}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {product.pprice}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           {product.pcategory}</Typography>
        </CardContent>
          

      </CardActionArea>
        
            </Card>
      </Box>
        ))}
  
  </Box>
  );

}
