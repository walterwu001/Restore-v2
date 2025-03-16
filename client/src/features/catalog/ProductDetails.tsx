import { useParams } from "react-router-dom"
import { Product } from "../../app/models/product";
import { useEffect, useState } from "react";
import { Button, Divider, Grid2, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from "@mui/material";
import { getWithAuth } from "../../app/api/api";

export default function ProductDetails() {

  const {id} = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   fetch(`https://localhost:5001/api/products/${id}`)
  //   .then(resopne => resopne.json())
  //   .then(data => setProduct(data))
  //   .catch(error => console.log(error))
  // }, [id])
   useEffect(() => {
        const fetchData = async () => {
          try {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const response = await getWithAuth<any>(`https://localhost:5001/api/products/${id}`);
            setProduct(response)
          } catch (err) {
            console.error("Fetch error:", err);
            setError("Error fetching data. Please log in again.");
          }
        };
    
        fetchData();
      }, [id]);

  if (!product) return <div>Loading ...</div>

  const productDetails = [
    {label: 'Name', value: product.name},
    {label: 'Description', value: product.description},
    {label: 'Type', value: product.type},
    {label: 'Brand', value: product.brand},
    {label: 'Quantity in stock', value: product.quantityInStock}
  ]

  return (    
    <Grid2 container spacing={6} maxWidth='lg' sx={{mx: 'auto'}}>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Grid2 size={6}>
        <img src={product.pictureUrl} alt={product.name} style={{width: '100%'}}/>
      </Grid2>
      <Grid2 size={6}>
        <Typography variant="h3">{product.name}</Typography>
        <Divider sx={{mb: 2}}/>
        <Typography variant="h4" color='secondary'>${(product.price / 100).toFixed(2)}</Typography>
        <TableContainer>
          <Table sx={{
            '& td': {fontSize: '1rem'}
          }}>
            <TableBody>
              {productDetails.map((detail, index) => (
                <TableRow key={index}>
                  <TableCell sx={{fontWeight: 'bold'}}>{detail.label}</TableCell>
                  <TableCell>{detail.value}</TableCell>
                </TableRow>
              ))}
     
            </TableBody>
          </Table>  
        </TableContainer>
        <Grid2 container spacing={2} marginTop={3}>
          <Grid2 size={6}>
            <TextField 
              variant="outlined"
              type="number"
              label="Quantity in basked"
              fullWidth
              defaultValue={1}
            />
          </Grid2>
          <Grid2 size={6}>
            <Button 
              sx={{height: '55px'}}
              color="primary"
              size="large"
              variant="contained"
              fullWidth
            >
               Add to basked 
            </Button>
          </Grid2>
        </Grid2>
      </Grid2>
    </Grid2>
  )
}