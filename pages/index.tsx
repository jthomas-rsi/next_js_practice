import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Typography } from "@mui/material";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import { Box } from "@mui/system";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <Box textAlign={"center"}>
        <Typography>Home Page</Typography>
      </Box>
      <Footer />
    </>
  );
}
