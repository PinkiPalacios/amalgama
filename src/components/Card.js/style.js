import G from "glamorous-native";

export const Container = G.view({
  width: "100%",
  height: 50,
  borderRadius: 4,
  marginVertical: 5,
  borderColor: "black",
  borderWidth: 2,
  justifyContent: "center",
  alignItems: "center"
});

export const CardText = G.text({
  fontSize: 20
});
