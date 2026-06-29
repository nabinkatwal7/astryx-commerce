"use client";

import { products } from "@/components/products";
import { Avatar } from "@astryxdesign/core/Avatar";
import { AvatarGroup } from "@astryxdesign/core/AvatarGroup";
import { Badge } from "@astryxdesign/core/Badge";
import { Banner } from "@astryxdesign/core/Banner";
import { Button } from "@astryxdesign/core/Button";
import { Card } from "@astryxdesign/core/Card";
import { Carousel } from "@astryxdesign/core/Carousel";
import { Divider } from "@astryxdesign/core/Divider";
import { Grid } from "@astryxdesign/core/Grid";
import { Icon } from "@astryxdesign/core/Icon";
import { HStack, Section, VStack } from "@astryxdesign/core/Layout";
import { ProgressBar } from "@astryxdesign/core/ProgressBar";
import { SelectableCard } from "@astryxdesign/core/SelectableCard";
import { Heading, Text } from "@astryxdesign/core/Text";
import { Thumbnail } from "@astryxdesign/core/Thumbnail";

export default function HomePage() {
  const featured = products.slice(0, 4);
  const foodItems = products.filter((p) => p.category === "Food");

  return (
    <VStack gap={6}>
      <VStack gap={2}>
        <Heading level={1} type="display-2">
          Little joys, everywhere you go
        </Heading>
        <Text type="large" color="secondary">
          We believe the smallest details are the ones that matter most. Turn an
          ordinary day into something worth remembering.
        </Text>
      </VStack>

      <Banner
        status="success"
        title="Summer Sale!"
        description="Up to 30% off select items. Limited time only."
        isDismissable
      />

      <Carousel gap={4} hasButtons hasEdgeFade>
        {featured.map((p) => (
          <Card key={p.id} width={280} variant="default">
            <VStack gap={2}>
              <Thumbnail src={p.image} alt={p.name} />
              {p.badge && (
                <Badge label={p.badge} variant={p.badgeVariant as any} />
              )}
              <Heading level={3}>{p.name}</Heading>
              <Text>{p.description}</Text>
              <HStack gap={2} vAlign="center">
                <Heading level={3} color="primary">
                  ${p.price}
                </Heading>
                {p.originalPrice && (
                  <Text color="secondary" hasStrikethrough>
                    ${p.originalPrice}
                  </Text>
                )}
              </HStack>
              <Button
                label="Add to cart"
                variant="primary"
                icon={<Icon icon="check" />}
              />
            </VStack>
          </Card>
        ))}
      </Carousel>

      <Divider />

      <Section heading="Shop by Category">
        <Grid columns={5} gap={4}>
          {["Wearables", "Audio", "Bags", "Home", "Food"].map((cat) => (
            <SelectableCard key={cat} variant="muted">
              <VStack gap={1} vAlign="center" hAlign="center">
                <Icon icon="check" />
                <Text weight="bold">{cat}</Text>
              </VStack>
            </SelectableCard>
          ))}
        </Grid>
      </Section>

      <Divider />

      <Section heading="Fresh from the Kitchen">
        <Grid columns={{ minWidth: 300, max: 3 }} gap={4}>
          {foodItems.map((p) => (
            <Card key={p.id}>
              <HStack gap={4}>
                <Thumbnail src={p.image} alt={p.name} />
                <VStack gap={1}>
                  <HStack gap={2} vAlign="center">
                    <Heading level={3}>{p.name}</Heading>
                    {p.badge && (
                      <Badge label={p.badge} variant={p.badgeVariant as any} />
                    )}
                  </HStack>
                  <Text>{p.description}</Text>
                  <Text type="label" color="secondary">
                    ${p.price}
                  </Text>
                  <Button label="Add to cart" size="sm" variant="secondary" />
                </VStack>
              </HStack>
            </Card>
          ))}
        </Grid>
      </Section>

      <Divider />

      <Section heading="Our Happy Customers">
        <HStack gap={4} vAlign="center">
          <AvatarGroup>
            <Avatar
              label="Ami Pena"
              src="https://lookaside.facebook.com/assets/astryx/DATA-Ami-Pena.png"
            />
            <Avatar label="John Doe" />
            <Avatar label="Jane Smith" />
            <Avatar label="Bob Wilson" />
          </AvatarGroup>
          <Text type="supporting">Trusted by 10,000+ customers worldwide</Text>
        </HStack>
      </Section>

      <Divider />

      <Section heading="Your Shopping Progress">
        <VStack gap={2}>
          <HStack gap={3} vAlign="center">
            <Text>Complete your profile</Text>
            <ProgressBar value={87.5} />
            <Badge label="7/8" variant="info" />
          </HStack>
          <Text type="supporting" color="secondary">
            Add your shipping address to unlock express checkout.
          </Text>
        </VStack>
      </Section>
    </VStack>
  );
}
