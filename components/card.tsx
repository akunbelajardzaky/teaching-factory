import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import card from "@material-tailwind/react/theme/components/card";

interface Card {
  id?: string;
  image: string;
  name: string;
  content: string;
  button?: string;
}

export function CardDefault(props: Card) {
  const { id, image, name, content, button } = props;
  return (
    <Card key={id} className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img src={image} alt="card-image" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {name}
        </Typography>
        <Typography>{content}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
  );
}
