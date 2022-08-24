import axios from "axios";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { ListProducts } from "../components/Cards/CardProduct";
import { Header } from "../components/Header";
import { Product } from "../types/Product";
import { ResponsePage } from "../types/responsePage";
import { Container } from "./styles";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  const [page, setPage] = useState<ResponsePage<Product>>();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const page = 1;
    const rows = 8;
    const sortBy = "id";
    const orderBy = "ASC";

    const url = `https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=${page}&rows=${rows}&sortBy=${sortBy}&orderBy=${orderBy}`;

    setIsLoading(true);

    axios({ url })
      .then((response) => {
        setPage(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return (
    <div>
      <Header />
      <Container>
        <div className="row">
           {page?.products.map((product) => (
              <div
                key={product.id}
                className="container-card-product"
              >
                <ListProducts product={product} />
              </div>
            ))
          }
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
