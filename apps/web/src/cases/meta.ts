import type { CaseEntry, CaseSlug } from './types';

/**
 * Metadata of the five bespoke cases, for all three locales. Port of Atlas `src/config/work.ts` (kind, services,
 * industry, url, accentPreset, nameLang) and the `items` of `src/i18n/<locale>/work.ts` (name, category, tagline).
 *
 * This file imports no components, so `_shared` (CaseHero, CaseFacts, CaseNext) can read it without an import cycle.
 * The slug → component map lives in `./registry.ts`.
 */
export const caseMeta: Record<CaseSlug, CaseEntry> = {
  'sahil-transport': {
    kind: 'client',
    services: ['logistics-software', 'data-analytics', 'ai-automation'],
    industry: 'logistics',
    accentPreset: 'orange',
    items: {
      az: {
        name: 'Sahil Transport',
        category: 'Logistika · Avtopark data platforması',
        tagline:
          'Bakı yük daşıma şirkəti üçün real vaxt rejimində avtopark monitorinqi, gözləmə vaxtının hesablanması və AI ilə qaimə emalı.',
      },
      en: {
        name: 'Sahil Transport',
        category: 'Logistics · Fleet data platform',
        tagline: 'Real-time fleet monitoring, waiting-time billing and AI invoice processing for a Baku road-freight carrier.',
      },
      ru: {
        name: 'Sahil Transport',
        category: 'Логистика · Платформа данных автопарка',
        tagline:
          'Мониторинг автопарка в реальном времени, начисление платы за простой и ИИ-обработка счетов водителей для бакинского автоперевозчика.',
      },
    },
  },
  'etehsil-az': {
    kind: 'platform',
    services: ['saas-development', 'erp', 'data-analytics'],
    industry: 'education',
    url: 'https://etehsil.az',
    accentPreset: 'blue',
    items: {
      az: {
        name: 'eTəhsil',
        category: 'EdTech · SaaS platforma',
        tagline: 'Azərbaycanda tədris mərkəzləri və repetitorlar üçün idarəetmə proqramı.',
      },
      en: {
        name: 'eTəhsil',
        category: 'EdTech · SaaS platform',
        tagline: 'The operating system for education centres and tutors in Azerbaijan.',
      },
      ru: {
        name: 'eTəhsil',
        category: 'EdTech · SaaS-платформа',
        tagline: 'Операционная система для образовательных центров и репетиторов Азербайджана.',
      },
    },
  },
  cavably: {
    kind: 'platform',
    services: ['saas-development', 'ai-automation'],
    industry: 'services',
    url: 'https://cavably.com',
    accentPreset: 'violet',
    items: {
      az: {
        name: 'Cavably',
        category: 'CRM · AI SaaS',
        tagline: 'WhatsApp, Instagram, Messenger və Telegram-a bir pəncərədən cavab verən AI əsaslı CRM.',
      },
      en: {
        name: 'Cavably',
        category: 'CRM · AI SaaS',
        tagline: 'An AI-first CRM that answers WhatsApp, Instagram, Messenger and Telegram from one inbox.',
      },
      ru: {
        name: 'Cavably',
        category: 'CRM · ИИ-SaaS',
        tagline: 'CRM с ИИ в основе, которая отвечает в WhatsApp, Instagram, Messenger и Telegram из единого окна.',
      },
    },
  },
  foodost: {
    kind: 'platform',
    services: ['saas-development', 'erp', 'ai-automation'],
    industry: 'hospitality',
    // No `url` on purpose (as on Atlas).
    accentPreset: 'rose',
    items: {
      az: {
        name: 'Foodost',
        category: 'HoReCa · Restoran proqramı',
        tagline: 'Restoranın bütün işi üçün vahid bulud platforması: kassa, mətbəx, anbar, maliyyə və çatdırılma.',
      },
      en: {
        name: 'Foodost',
        category: 'HoReCa · Restaurant SaaS',
        tagline: 'One cloud platform for the whole restaurant: POS, kitchen, stock, finance and delivery.',
      },
      ru: {
        name: 'Foodost',
        category: 'HoReCa · SaaS для ресторанов',
        tagline: 'Одна облачная платформа для всего ресторана: касса, кухня, склад, финансы и доставка.',
      },
    },
  },
  'molecion-az': {
    kind: 'product',
    services: ['saas-development', 'erp', 'data-analytics'],
    industry: 'retail',
    // No `url` on purpose (as on Atlas): molecion.az does not resolve yet.
    accentPreset: 'gold',
    nameLang: 'en',
    launching: true,
    items: {
      az: {
        name: 'Molecion',
        category: 'Pərakəndə · E-commerce və arxa ofis',
        tagline: 'Bakıdakı öz premium parfümeriya biznesimiz — satış kanalını və arxa ofisi özümüz qurduq.',
      },
      en: {
        name: 'Molecion',
        category: 'Retail · E-commerce & back office',
        tagline: 'Our own premium-fragrance retail business in Baku, with its sales channel and back office built in house.',
      },
      ru: {
        name: 'Molecion',
        category: 'Ритейл · E-commerce и бэк-офис',
        tagline: 'Наш собственный бизнес премиальной парфюмерии в Баку: канал продаж и бэк-офис построили сами.',
      },
    },
  },
};
