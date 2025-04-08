import * as React from 'react';

import { Button } from '../../bricks';
import { store } from '../../store';
import { startCreatingTransaction } from '../../store/reducers';
import { Currency } from '../currency';
import { useTransactionValidator } from './validator';

interface Props {
  userId: string;
  value: number;
  isDeposit?: boolean;
}

export function TransactionButton(props: Props): JSX.Element {
  const isValid = useTransactionValidator(props.value, props.userId, props.isDeposit);

  return (
    <Button
      green={props.isDeposit}
      red={!props.isDeposit}
      padding="0.8rem 0.5rem"
      onClick={() =>
        startCreatingTransaction(store.dispatch, props.userId, {
          amount: props.value,
        })
      }
      type="button"
      disabled={!isValid}
    >
      <Currency value={props.value} />
    </Button>
  );
}
