import React from "react";
import { Card, Button, Badge } from "@heroui/react";

export default function HomePage() {
  return (
    <Card>
      <Card.Content>
        <h1 className="text-4xl font-semibold">{document.title}</h1>
        <Badge size="sm" color="primary">Beta</Badge>
      </Card.Content>
    </Card>
  );
}
