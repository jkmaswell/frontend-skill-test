const env = process.env.NODE_ENV

const defaultConfig = {
  envName: 'default', // a sanity check property for checking the loading of configs;
  env, // this is the property that should be used for environment; this and envName should match
  httpPort: 3000,
  invoices: [
    {
      status: 'unpaid',
      code: 'H3110017',
      totalAmount: 204,
      buyerName: 'STF France',
      sellerName: 'STF Belgium',
      started: '14 Feb 2018',
      blockchainAddress: '0x4E5748...c81868F6',
    },
    {
      status: 'unpaid',
      code: 'H3110018',
      totalAmount: 204,
      buyerName: 'STF Spain',
      sellerName: 'STF Belgium',
      started: '07 Mar 2018',
      blockchainAddress: '0x4E5748...c81868F6',
    },
    {
      status: 'unpaid',
      code: 'H3110019',
      totalAmount: 204,
      buyerName: 'STF Germany',
      sellerName: 'STF Belgium',
      started: '25 Jun 2018',
      blockchainAddress: '0x4E5748...c81868F6',
    },
  ],
}

export default defaultConfig
