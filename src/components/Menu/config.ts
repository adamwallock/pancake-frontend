import { MenuEntry } from 'pixiufarm-uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: 'http://localhost:5000/',
  },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      {
        label: t('Exchange'),
        href: 'http://localhost:3000/#/swap',
      },
      {
        label: t('Liquidity'),
        href: 'http://localhost:3000/#/pool',
      },

    ],
  },
  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: '/farms',
  },
 
  {
    label: t('Referrals'),
    icon: 'FarmIcon',
    href: 'http://localhost:5000/#/refferals',
  },
  {
    label: t('Listings'),
    icon: 'GroupsIcon',
    items: [
      {
        label: t('BscScan'),
        href: '/',
      },
      {
        label: t('DappRadar'),
        href: '/',
      },

      {
        label: t('CoinGecko'),
        href: '/',
      },
    ],
  },
  {
    label: t('Docs'),
    icon: 'FarmIcon',
    href: 'http://localhost:5000/#/docs',
  },
  {
    label: t('Community'),
    icon: 'GroupsIcon',
    items: [
      {
        label: t('Telelgram'),
        href: '/',
      },
      {
        label: t('Twitter'),
        href: '/',
      },

      {
        label: t('Reddit'),
        href: '/',
      },
      {
        label: t('Medium'),
        href: '/',
      },
    ],
  },
]

export default config
