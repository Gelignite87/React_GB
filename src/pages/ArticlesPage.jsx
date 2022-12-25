import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import { useSelector, useDispatch } from "react-redux";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { fetchDataMiddleware } from "../store/articles/actions"

export function Articles() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const aData = useSelector((store) => store.articles)
  const dispatch = useDispatch()

  useEffect(() => {
    setError('')
    setArticles(aData)
    setLoading(false)
    if (aData[0].error) {
      setError(aData[0].error)
    }
  }, [aData])

  return (
    <>
      <div>Articles</div>
      <Button 
        variant="contained"
        color="success"
        onClick={ () => {
          dispatch(fetchDataMiddleware('https://api.spaceflightnewsapi.net/v3/articles'));
          setLoading(true)
        }}>
        Get API
      </Button>
      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      )}
      {!loading && !error && articles.map((article) => (
        <Box key={article.id} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={article.imageUrl}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {article.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {article.summary}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      ))}
      {error && <p style={{color: 'red'}}>{error}</p>}
    </>
  )
}