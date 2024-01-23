import { Address } from "viem";

type Deployment = {
  DAO_ADDRESS?: Address;
  COOKIEJAR_FACTORY_ADDRESS: Address;
  COOKIEJAR_ADDRESS?: Address;
  COOKIE_JAR_NFT_ADDRESS: Address;
  BAAL_COOKIEJAR_ADDRESS: Address;
  ERC20_COOKIEJAR_ADDRESS: Address;
  ERC721_COOKIEJAR_ADDRESS: Address;
  LIST_COOKIEJAR_ADDRESS: Address;
  OPEN_COOKIEJAR_ADDRESS: Address;
  LIST_COOKIEJAR_6551_ADDRESS: Address;
  ACCOUNT_IMPLEMENTATION_ADDRESS: Address;
  POSTER_ADDRESS: Address;
  START_BLOCK: number;
  CHAIN_ID: number;
  CHAIN_NAME: string;
};

export const GNOSIS: Deployment = {
  COOKIEJAR_FACTORY_ADDRESS: "0xD858ce60102BCEa272a6FA36B2E1770877B8Fa45",
  COOKIE_JAR_NFT_ADDRESS: "0xb6F9534F53F3F42a0b25d8ECC290419c98f9f212",
  BAAL_COOKIEJAR_ADDRESS: "0x7c1Db931F804271E39b04E68221b71Ca94E9AFa5",
  ERC20_COOKIEJAR_ADDRESS: "0x85C60D0674e161B7f9d1d40A2A46e4b788E7F057",
  ERC721_COOKIEJAR_ADDRESS: "0x15f06a6dB8eC8D79Eaa49659210C1c58975a4056",
  LIST_COOKIEJAR_ADDRESS: "0x226E0601aa8b8CC34519c76Be00A7a6a8a4d97d2",
  OPEN_COOKIEJAR_ADDRESS: "0x0C7F0fC0ddb95d7099ED97c10A2DE549c03E39F9",
  LIST_COOKIEJAR_6551_ADDRESS: "0xb8858dF24B89d9D17954D763b08b860AD24cfd2d",
  ACCOUNT_IMPLEMENTATION_ADDRESS: "0xbCe05b4eB846A033559387e0fa62F3D13EEAAECE",
  POSTER_ADDRESS: "0x000000000000cd17345801aa8147b8D3950260FF",
  START_BLOCK: 31292780,

  CHAIN_ID: 100,
  CHAIN_NAME: "Gnosis",
};

export const GOERLI: Deployment = {
  COOKIEJAR_FACTORY_ADDRESS: "0x8f60853B55847d91331106acc303F4A8676efc8B",
  COOKIE_JAR_NFT_ADDRESS: "0xEA443B2ac5cDfa0357d92941a2F18d3B4C816b81",
  BAAL_COOKIEJAR_ADDRESS: "0x30b3Ac0e403e5102c9f0097E9c65f09E5AaF810c",
  ERC20_COOKIEJAR_ADDRESS: "0x6a2580B166b7132042cCcABa1Fe554fd67440597",
  ERC721_COOKIEJAR_ADDRESS: "0xf3219beFA8d7ae465fbb0DD227F706972943a84E",
  LIST_COOKIEJAR_ADDRESS: "0x92c82e6DFd97e54c5f22bE866b863Ce71f26373f",
  OPEN_COOKIEJAR_ADDRESS: "0x5BeFFF7186811b49d29B5565B161Ea7e3d890CC8",
  LIST_COOKIEJAR_6551_ADDRESS: "0xbec7A3143314B51e2AfCd0E6754c4B0E95AD0628",
  ACCOUNT_IMPLEMENTATION_ADDRESS: "0x2EC5152cC1706Ba08DaA88FaD23D32f88Bd29988",
  POSTER_ADDRESS: "0x000000000000cd17345801aa8147b8D3950260FF",
  START_BLOCK: 10163300,
  CHAIN_ID: 5,
  CHAIN_NAME: "Goerli",
};

export const SEPOLIA: Deployment = {
  COOKIEJAR_FACTORY_ADDRESS: "0x8f60853B55847d91331106acc303F4A8676efc8B",
  COOKIE_JAR_NFT_ADDRESS: "0xb6F9534F53F3F42a0b25d8ECC290419c98f9f212",
  BAAL_COOKIEJAR_ADDRESS: "0x30b3Ac0e403e5102c9f0097E9c65f09E5AaF810c",
  ERC20_COOKIEJAR_ADDRESS: "0x6a2580B166b7132042cCcABa1Fe554fd67440597",
  ERC721_COOKIEJAR_ADDRESS: "0xf3219beFA8d7ae465fbb0DD227F706972943a84E",
  LIST_COOKIEJAR_ADDRESS: "0x92c82e6DFd97e54c5f22bE866b863Ce71f26373f",
  OPEN_COOKIEJAR_ADDRESS: "0x5BeFFF7186811b49d29B5565B161Ea7e3d890CC8",
  LIST_COOKIEJAR_6551_ADDRESS: "0xb8858dF24B89d9D17954D763b08b860AD24cfd2d",
  ACCOUNT_IMPLEMENTATION_ADDRESS: "0xbCe05b4eB846A033559387e0fa62F3D13EEAAECE",
  POSTER_ADDRESS: "0x000000000000cd17345801aa8147b8D3950260FF",
  START_BLOCK: 9787323,

  CHAIN_ID: 11155111,
  CHAIN_NAME: "Sepolia",
};

export const DEPLOYMENTS: { [key: string]: Deployment } = {
  "11155111": SEPOLIA,
  "100": GNOSIS,
  "5": GOERLI,
  development: GNOSIS,
};

export const DEFAULT_TARGET: Deployment = GNOSIS;