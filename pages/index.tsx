import Head from "next/head";
import { Image } from "@chakra-ui/react";
import GradientLayout from "../components/gradientLayout";
import styles from "../styles/Home.module.css";
import prisma from "../lib/prisma";
import { Box, Text, Flex } from "@chakra-ui/layout";
import { useMe } from "../lib/hooks";

export default function Home({ artists }) {
  const { user } = useMe();

  return (
    <GradientLayout
      roundImage
      color="blue"
      subtitle="profile"
      title={`${user?.firstName} ${user?.lastName}`}
      description={`${user?.playlistsCount} public playlists`}
      image="./headshot.png"
    >
      <Box color="white" paddingX="40px">
        <Box marginBottom="40px">
          <Text fontSize="2xl" fontWeight="bold">
            Top artists this month
          </Text>
          <Text fontSize="md">Only visible to you</Text>
        </Box>
        <Flex>
          {artists.map((artist) => {
            <Box paddingX="10px" width="20%">
              <Box bg="gray.900" borderRadius="4px" padding="15px" width="100%">
                <Image
                  src="https://placekitten.com/300/300"
                  borderRadius="100%"
                />
                <Box marginTop="20px">
                  <Text fontSize="large">{artist.name}</Text>
                  <Text fontSize="x-small">Artist</Text>
                </Box>
              </Box>
              ;
            </Box>;
          })}
        </Flex>
      </Box>
    </GradientLayout>
  );
}

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({});

  return {
    props: { artists },
  };
};
