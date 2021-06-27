import React from "react";
import { Image, View } from "react-native";

import { styles } from "./styles";
import DiscordSvg from '../../assets/discord.svg';
const { CDN_IMAGE } = process.env;

type Props = {
  guildId: string;
  icon: string | null;

}

export function GuildIcon({guildId, iconId}: Props) {
  const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;

    //"data:image/png;base64,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";

  return (
    <View style={styles.container}>
    {
       iconId ?
       <Image 
       source={{ uri }}
       style={styles.image}
       resizeMode="cover"
       
        />
        :
      <DiscordSvg
       width={40}
       height={40}
       />
    }
    </View>
  )
}