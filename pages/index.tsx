import Head from "next/head";
import Image from "next/image";
import GradientLayout from "../components/gradientLayout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <GradientLayout
      roundImage
      color="blue"
      subtitle="profile"
      title="Nathan Schrader"
      description="10 public playlists"
      image="./headshot.png"
    >
      <div>Home page</div>
    </GradientLayout>
  );
}
