import { defineQuery } from 'next-sanity'

export const PAGE_QUERY = defineQuery(`
  *[_type == "flexiblePage" && slug.current == $slug][0]{
    pageTitle,
    slug,
    sections[]{
      ...,
      _type == "heroSection" => {
        ...,
        "bgImageUrl": bgImage.asset->url,
        "bgVideoFileUrl": bgVideoFile.asset->url
      },
      _type == "splitSection" => {
        ...,
        "imageUrl": image.asset->url
      },
      _type == "sliderSection" => {
        ...,
        slides[]{
          ...,
          "imageUrl": image.asset->url
        }
      },
      _type == "gridCardsSection" => {
        ...,
        cards[]{
          ...,
          "cardImg": cardImage.asset->url,
          "imageUrl": cardImage.asset->url
        }
      },
      _type == "internalLinksSection" => {
        ...,
        pages[]->{
          pageTitle,
          slug
        }
      }
    },
    seo
  }
`)