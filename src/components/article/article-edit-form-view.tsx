import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { RouteComponentProps } from 'react-router';
import { Arrow, Button } from '../../bricks';
import { ArticleForm } from './article-form';

export function ArticleEditFormView({
  match,
  history,
}: RouteComponentProps<{ id: string }>): JSX.Element {
  return (
    <>
      <div style={{ margin: '1rem' }}>
        <Button onClick={() => history.back()}>
          <>
            <Arrow
              style={{
                width: '0.8rem',
                height: '0.8rem',
                marginRight: '0.5rem',
                transform: 'rotate(-180deg)',
              }}
            />
            <FormattedMessage id="BACK_BUTTON" />
          </>
        </Button>
      </div>
      <div style={{ padding: '1rem' }}>
        <ArticleForm onCreated={history.back} articleId={Number(match.params.id)} />
      </div>
    </>
  );
}
