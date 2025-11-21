import type { CollectionConfig } from 'payload'

import { authenticated } from '@/access/authenticated'
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'

import { hero } from '@/heros/config'
import { slugField } from 'payload'
import { populatePublishedAt } from '@/hooks/populatePublishedAt'
import { generatePreviewPath } from '@/utilities/generatePreviewPath'
import { revalidateDelete, revalidatePage } from '@/collections/Pages/hooks/revalidatePage'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

// Page blocks
import { Archive } from '@/blocks/ArchiveBlock/config'
import { CallToAction } from '@/blocks/CallToAction/config'
import { Content } from '@/blocks/Content/config'
import { FormBlock } from '@/blocks/Form/config'
import { MediaBlock } from '@/blocks/MediaBlock/config'
import { LightBoxGallery } from '@/blocks/LightBoxGallery/config'
import { RentalSection } from '@/blocks/RentalSection/config'
import { ActivitiesSection } from '@/blocks/ActivitiesSection/config'
import { CtaSection } from '@/blocks/CtaSection/config'
import { FacilitiesSection } from '@/blocks/FacilitiesSection/config'
import { CafeSection } from '@/blocks/CafeSection/config'
import { TestimonialSection } from '@/blocks/TestimonialSection/config'
import { HomeHero } from '@/blocks/HomeHero/config'
import { ReservationSection } from '@/blocks/ReservationSection/config'
import { ContentSection } from '@/blocks/ContentSection/config'
import { AboutHero } from '@/blocks/AboutHero/config'
import { FeaturesSection } from '@/blocks/FeaturesSection/config'
import { SeasonActivitiesSection } from '@/blocks/SeasonActivitiesSection/config'
import { SpaVacationsSection } from '@/blocks/SpaVacationsSection/config'
import { CtaFormSection } from '@/blocks/CtaFormSection/config'
import { SliderSection } from '@/blocks/SliderSection/config'
import { LightBoxGallerySection } from '@/blocks/LightBoxGallerySection/config'
import { CabinSection } from '@/blocks/CabinSection/config'
import { ContactItem } from '@/blocks/ContactItem/config'
import { ContactContentSection } from '@/blocks/ContactContentSection/config'
import { ContactUsFormSection } from '@/blocks/ContactUsFormSection/config'
import { MapSection } from '@/blocks/MapSection/config'
import { RentalPoliciesSection } from '@/blocks/RentalPoliciesSection/config'

export const Pages: CollectionConfig<'pages'> = {
  defaultSort: '-updatedAt',
  slug: 'pages',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  // This config controls what's populated by default when a page is referenced
  // https://payloadcms.com/docs/queries/select#defaultpopulate-collection-config-property
  // Type safe if the collection slug generic is passed to `CollectionConfig` - `CollectionConfig<'pages'>
  defaultPopulate: {
    title: true,
    slug: true,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) =>
        generatePreviewPath({
          slug: data?.slug,
          collection: 'pages',
          req,
        }),
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: data?.slug as string,
        collection: 'pages',
        req,
      }),
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          fields: [hero],
          label: 'Hero',
        },
        {
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              blocks: [
                CallToAction,
                Content,
                MediaBlock,
                Archive,
                FormBlock,
                LightBoxGallery,
                RentalSection,
                ActivitiesSection,
                CtaSection,
                FacilitiesSection,
                CafeSection,
                TestimonialSection,
                HomeHero,
                ReservationSection,
                ContentSection,
                AboutHero,
                FeaturesSection,
                SeasonActivitiesSection,
                SpaVacationsSection,
                CtaFormSection,
                SliderSection,
                LightBoxGallerySection,
                CabinSection,
                ContactItem,
                ContactContentSection,
                ContactUsFormSection,
                MapSection,
                RentalPoliciesSection,
              ],
              required: true,
              admin: {
                initCollapsed: true,
              },
            },
          ],
          label: 'Content',
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    slugField(),
  ],
  hooks: {
    afterChange: [revalidatePage],
    beforeChange: [populatePublishedAt],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
