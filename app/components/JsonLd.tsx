const siteUrl = 'https://www.transworldintl.com.pk';

export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', ...data }) }}
    />
  );
}

export function breadcrumb(items: { name: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`,
    })),
  };
}

export function serviceSchema(name: string, description: string, language: string) {
  return {
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Transworld Translation',
      url: siteUrl,
    },
    areaServed: ['PK', 'Worldwide'],
    availableLanguage: language,
    serviceType: 'Translation Service',
  };
}

export function cptServiceSchema(name: string, description: string) {
  return {
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Transworld Translation',
      url: siteUrl,
    },
    areaServed: ['PK', 'Worldwide'],
    serviceType: name,
  };
}
