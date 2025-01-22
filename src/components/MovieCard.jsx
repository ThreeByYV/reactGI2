import Card from 'react-bootstrap/Card';


export default function MovieCard({ title, src, text }) {
    return (
        <>
        <Card className='p-0'>
            <Card.Img variant="top" src={src} className= "h-full w-full object-cover"/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
            </Card.Body>
        </Card>
        </>
       
    )
}