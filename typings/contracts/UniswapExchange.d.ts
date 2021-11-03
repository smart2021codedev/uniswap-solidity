/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter } from "ethers";
import { Provider } from "ethers/providers";
import { BigNumber } from "ethers/utils";
import { TransactionOverrides } from ".";

export class UniswapExchange extends Contract {
  functions: {
    balanceOf(owner: string): Promise<BigNumber>;

    allowance(owner: string, spender: string): Promise<BigNumber>;

    getInputPrice(
      input_amount: number | string | BigNumber,
      input_reserve: number | string | BigNumber,
      output_reserve: number | string | BigNumber
    ): Promise<BigNumber>;

    getOutputPrice(
      output_amount: number | string | BigNumber,
      input_reserve: number | string | BigNumber,
      output_reserve: number | string | BigNumber
    ): Promise<BigNumber>;

    getEthToTokenInputPrice(
      eth_sold: number | string | BigNumber
    ): Promise<BigNumber>;

    getEthToTokenOutputPrice(
      tokens_bought: number | string | BigNumber
    ): Promise<BigNumber>;

    getTokenToEthInputPrice(
      tokens_sold: number | string | BigNumber
    ): Promise<BigNumber>;

    getTokenToEthOutputPrice(
      eth_bought: number | string | BigNumber
    ): Promise<BigNumber>;

    approve(
      spender: string,
      value: number | string | BigNumber,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    transferFrom(
      from: string,
      to: string,
      value: number | string | BigNumber,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    increaseAllowance(
      spender: string,
      addedValue: number | string | BigNumber,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    decreaseAllowance(
      spender: string,
      subtractedValue: number | string | BigNumber,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    transfer(
      to: string,
      value: number | string | BigNumber,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setup(
      token_addr: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    ethToTokenSwapInput(
      min_tokens: number | string | BigNumber,
      deadline: number | string | BigNumber,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    ethToTokenTransferInput(
      min_tokens: number | string | BigNumber,
      deadline: number | string | BigNumber,
      recipient: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    ethToTokenSwapOutput(
      tokens_bought: number | string | BigNumber,
      deadline: number | string | BigNumber,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    ethToTokenTransferOutput(
      tokens_bought: number | string | BigNumber,
      deadline: number | string | BigNumber,
      recipient: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    tokenToEthSwapInput(
      tokens_sold: number | string | BigNumber,
      min_eth: number | string | BigNumber,
      deadline: number | string | BigNumber,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    tokenToEthTransferInput(
      tokens_sold: number | string | BigNumber,
      min_eth: number | string | BigNumber,
      deadline: number | string | BigNumber,
      recipient: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    tokenToEthSwapOutput(
      eth_bought: number | string | BigNumber,
      max_tokens: number | string | BigNumber,
      deadline: number | string | BigNumber,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    tokenToEthTransferOutput(
      eth_bought: number | string | BigNumber,
      max_tokens: number | string | BigNumber,
      deadline: number | string | BigNumber,
      recipient: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    tokenToTokenSwapInput(
      tokens_sold: number | string | BigNumber,
      min_tokens_bought: number | string | BigNumber,
      min_eth_bought: number | string | BigNumber,
      deadline: number | string | BigNumber,
      token_addr: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    tokenToTokenTransferInput(
      tokens_sold: number | string | BigNumber,
      min_tokens_bought: number | string | BigNumber,
      min_eth_bought: number | string | BigNumber,
      deadline: number | string | BigNumber,
      recipient: string,
      token_addr: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    tokenToTokenSwapOutput(
      tokens_bought: number | string | BigNumber,
      max_tokens_sold: number | string | BigNumber,
      max_eth_sold: number | string | BigNumber,
      deadline: number | string | BigNumber,
      token_addr: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    tokenToTokenTransferOutput(
      tokens_bought: number | string | BigNumber,
      max_tokens_sold: number | string | BigNumber,
      max_eth_sold: number | string | BigNumber,
      deadline: number | string | BigNumber,
      recipient: string,
      token_addr: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    tokenToExchangeSwapInput(
      tokens_sold: number | string | BigNumber,
      min_tokens_bought: number | string | BigNumber,
      min_eth_bought: number | string | BigNumber,
      deadline: number | string | BigNumber,
      exchange_addr: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    tokenToExchangeTransferInput(
      tokens_sold: number | string | BigNumber,
      min_tokens_bought: number | string | BigNumber,
      min_eth_bought: number | string | BigNumber,
      deadline: number | string | BigNumber,
      recipient: string,
      exchange_addr: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    tokenToExchangeSwapOutput(
      tokens_bought: number | string | BigNumber,
      max_tokens_sold: number | string | BigNumber,
      max_eth_sold: number | string | BigNumber,
      deadline: number | string | BigNumber,
      exchange_addr: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    tokenToExchangeTransferOutput(
      tokens_bought: number | string | BigNumber,
      max_tokens_sold: number | string | BigNumber,
      max_eth_sold: number | string | BigNumber,
      deadline: number | string | BigNumber,
      recipient: string,
      exchange_addr: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    addLiquidity(
      min_liquidity: number | string | BigNumber,
      max_tokens: number | string | BigNumber,
      deadline: number | string | BigNumber,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    removeLiquidity(
      amount: number | string | BigNumber,
      min_eth: number | string | BigNumber,
      min_tokens: number | string | BigNumber,
      deadline: number | string | BigNumber,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    name(): Promise<string>;
    totalSupply(): Promise<BigNumber>;
    decimals(): Promise<BigNumber>;
    symbol(): Promise<string>;
    tokenAddress(): Promise<string>;
    factoryAddress(): Promise<string>;
  };
  filters: {
    TokenPurchase(
      buyer: string | null,
      eth_sold: number | string | BigNumber | null,
      tokens_bought: number | string | BigNumber | null
    ): EventFilter;

    EthPurchase(
      buyer: string | null,
      tokens_sold: number | string | BigNumber | null,
      eth_bought: number | string | BigNumber | null
    ): EventFilter;

    AddLiquidity(
      provider: string | null,
      eth_amount: number | string | BigNumber | null,
      token_amount: number | string | BigNumber | null
    ): EventFilter;

    RemoveLiquidity(
      provider: string | null,
      eth_amount: number | string | BigNumber | null,
      token_amount: number | string | BigNumber | null
    ): EventFilter;

    Transfer(from: string | null, to: string | null, value: null): EventFilter;

    Approval(
      owner: string | null,
      spender: string | null,
      value: null
    ): EventFilter;
  };
}