export interface Node {
  type: string
  id: string
  attributes: {
    brandId: number
    url: string
    title: string
    domainMentionsInLinkCount: number
    brandMentionsInTextCount: number
    keywords: {
      brandOccurrenceId: number
      keyword: string
      position: number
    }[]
    urlSentiment: {
      brandSentimentId: number | null
      sentiment: string
    }
    visibility: number
  }
}

export const data: Node[] = [
  {
    type: 'url-keyword-visibility',
    id: '79613',
    attributes: {
      brandId: 79613,
      url: 'https://ahrefs.com/blog/google-advanced-search-operators/',
      title:
        'Google Search Operators: The Complete List (42 Advanced Operators)',
      domainMentionsInLinkCount: 0,
      brandMentionsInTextCount: 4,
      keywords: [
        {
          brandOccurrenceId: 4435428,
          keyword: 'google search strings',
          position: 1,
        },
        {
          brandOccurrenceId: 4440536,
          keyword: 'google advanced search operators',
          position: 1,
        },
        {
          brandOccurrenceId: 4423381,
          keyword: 'google inurl',
          position: 1,
        },
        {
          brandOccurrenceId: 4433534,
          keyword: 'google search modifiers',
          position: 1,
        },
        {
          brandOccurrenceId: 4433455,
          keyword: 'google search operators',
          position: 1,
        },
        {
          brandOccurrenceId: 4414449,
          keyword: 'google search tricks',
          position: 18,
        },
        {
          brandOccurrenceId: 4437380,
          keyword: 'google advanced',
          position: 4,
        },
        {
          brandOccurrenceId: 4431269,
          keyword: 'search operators',
          position: 1,
        },
        {
          brandOccurrenceId: 4440163,
          keyword: 'google search commands',
          position: 1,
        },
        {
          brandOccurrenceId: 4436158,
          keyword: 'search syntax',
          position: 1,
        },
        {
          brandOccurrenceId: 4402478,
          keyword: 'google operators',
          position: 1,
        },
        {
          brandOccurrenceId: 4402227,
          keyword: 'boolean search google',
          position: 4,
        },
        {
          brandOccurrenceId: 4438647,
          keyword: 'google advanced search',
          position: 4,
        },
        {
          brandOccurrenceId: 4436810,
          keyword: 'advanced search',
          position: 6,
        },
      ],
      urlSentiment: { brandSentimentId: 4394414, sentiment: 'POSITIVE' },
      visibility: 2.027904807407913,
    },
  },
  {
    type: 'url-keyword-visibility',
    id: '79613',
    attributes: {
      brandId: 79613,
      url: 'https://smallseotools.com/keyword-position/',
      title:
        'Keyword Rank Checker - A Free online Google keyword position checker',
      domainMentionsInLinkCount: 3,
      brandMentionsInTextCount: 1,
      keywords: [
        {
          brandOccurrenceId: 4426062,
          keyword: 'seo keyword rank checker tool',
          position: 2,
        },
        {
          brandOccurrenceId: 4420779,
          keyword: 'serp rank checker tool',
          position: 16,
        },
        {
          brandOccurrenceId: 4438394,
          keyword: 'search ranking tracker',
          position: 9,
        },
        {
          brandOccurrenceId: 4438650,
          keyword: 'keyword ranking',
          position: 3,
        },
        {
          brandOccurrenceId: 4428516,
          keyword: 'check your keyword ranking',
          position: 2,
        },
        {
          brandOccurrenceId: 4437519,
          keyword: 'seo keyword rank checker',
          position: 2,
        },
        {
          brandOccurrenceId: 4439994,
          keyword: 'free rank checker',
          position: 4,
        },
        {
          brandOccurrenceId: 4435651,
          keyword: 'rank checker tool',
          position: 4,
        },
        {
          brandOccurrenceId: 4438703,
          keyword: 'google keyword rank checker',
          position: 1,
        },
        {
          brandOccurrenceId: 4417154,
          keyword: 'free keyword rank checker',
          position: 2,
        },
        {
          brandOccurrenceId: 4416455,
          keyword: 'keyword rank tracker tool',
          position: 8,
        },
        {
          brandOccurrenceId: 4433416,
          keyword: 'keyword ranking tool',
          position: 3,
        },
        {
          brandOccurrenceId: 4440341,
          keyword: 'url rank tracker',
          position: 19,
        },
        {
          brandOccurrenceId: 4425966,
          keyword: 'check website keyword ranking',
          position: 2,
        },
        {
          brandOccurrenceId: 4439003,
          keyword: 'website position checker',
          position: 1,
        },
        {
          brandOccurrenceId: 4439756,
          keyword: 'rank checker',
          position: 8,
        },
        {
          brandOccurrenceId: 4437987,
          keyword: 'website keyword checker',
          position: 3,
        },
        {
          brandOccurrenceId: 4437615,
          keyword: 'keyword rank check',
          position: 3,
        },
      ],
      urlSentiment: { brandSentimentId: null, sentiment: 'UNDEFINED' },
      visibility: 1.1455418287716423,
    },
  },
]
