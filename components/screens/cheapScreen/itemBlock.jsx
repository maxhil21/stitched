import {s} from "./itemBlock.style";
import {View, Text} from "react-native";

export function ItemBlock({data}) {

    const marketValue = data?.data?.[0].market_value;
    const newMV = Number(marketValue).toLocaleString();

    return (
        <View style={s.block}>
            <Text style={s.name}>{data?.data?.[0].name}</Text>
            <View style={s.line}/>
            <Text style={s.type}>Type: {data?.data?.[0].type}</Text>
            <Text style={s.type}>Market Value: {newMV}</Text>
            <Text style={s.description}>Description: {data?.data?.[0].description}</Text>
        </View>
    );
}