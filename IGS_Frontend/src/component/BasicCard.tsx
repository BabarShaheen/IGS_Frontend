import * as React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

export default function BasicCard({ title, text }) {
  return (
    <Card
      sx={{
        minHeight: 220,
        maxHeight: 300,
        maxWidth: 330,
        margin: 2,
        backgroundColor: "rgba(0, 0, 0, 0.2)", // dark + translucent
        color: "#fff",
        backdropFilter: "blur(4px)",
        borderRadius: 2,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <CardContent>
        <Typography variant="h6" component="div" fontWeight="bold" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}
