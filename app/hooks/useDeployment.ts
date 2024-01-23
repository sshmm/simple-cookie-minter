import { useChainId } from "wagmi";
import { DEPLOYMENTS } from "../contracts";
export const useDeployment = () => {
  const chainId = useChainId();

  if (process.env.NODE_ENV === "development") {
    return DEPLOYMENTS["development"];
  }

  const target = Object.keys(DEPLOYMENTS).find((t) => t === chainId.toString());

  if (!target) {
    console.warn("Targets for chainId not found.");
    return undefined;
  }

  return DEPLOYMENTS[chainId as keyof typeof DEPLOYMENTS];
};
