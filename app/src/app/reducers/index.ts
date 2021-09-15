/*
 * File: index.ts
 * Project: crud-ngrx
 * Created: Wednesday, September 15th 2021, 7:04:27 pm
 * Last Modified: Wednesday, September 15th 2021, 7:14:23 pm
 * Copyright © 2021 AMDE Agência
 */

import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer,
} from '@ngrx/store';
import {environment} from '../../environments/environment';

export interface State {}

export const reducers: ActionReducerMap<State> = {};

export const metaReducers: MetaReducer<State>[] = !environment.production
    ? []
    : [];
