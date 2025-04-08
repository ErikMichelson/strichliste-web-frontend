import * as React from 'react';
import { GridThree } from '../../bricks';
import { TransactionButton } from './transaction-button';

export interface PaymentButtonListProps {
  steps: number[];
  userId: string;
  isDeposit: boolean;
}

export function PaymentButtonList(props: PaymentButtonListProps): JSX.Element {
  const multiplier = props.isDeposit ? 1 : -1;
  return (
    <GridThree>
      {props.steps.map((step) => (
        <TransactionButton
          key={step}
          isDeposit={props.isDeposit}
          userId={props.userId}
          value={step * multiplier}
        />
      ))}
    </GridThree>
  );
}
