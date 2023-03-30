import Image from "next/image";
import s1 from "../img/product.jpg";

import {
  Button, Card, CardBody,
  CardFooter, CardHeader, Typography
} from "@material-tailwind/react";
import Link from "next/link";

export default function SingleProduct({ attributes }) {
  return (
    <section className="product  cursor-pointer  ">
      <Card className="max-w-[25rem] overflow-hidden rounded-md">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          <Image src={s1} alt="ui/ux review check" />
        </CardHeader>
        <CardBody>
          <Typography variant="h1" color="blue-gray">
            UI/UX Review Check
          </Typography>
          <Typography variant="paragraph" color="gray" className="mt-3 font-normal">
            Because it&apos;s about motivating the doers. Because I&apos;m here
            to follow my dreams and inspire others.
          </Typography>
        </CardBody>
        <CardFooter className="flex items-center !py-0 mb-4  justify-between">
  
    <Link href={`/shop/menu/submenu`}>
        <Button variant="gradient"  size="sm">Details</Button>
    </Link>
        </CardFooter>
      </Card>
    </section>
  );
}
