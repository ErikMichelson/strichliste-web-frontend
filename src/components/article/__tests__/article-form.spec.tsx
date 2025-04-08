import React from 'react';

import { renderWithContext } from '../../../spec-configs/render';
import { ArticleForm } from '../article-form';

describe('article form', () => {
  it('does not crash', () => {
    renderWithContext(<ArticleForm onCreated={() => {}} />, {});
  });
});
