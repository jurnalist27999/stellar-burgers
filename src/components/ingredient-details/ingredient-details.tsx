import { FC } from 'react';
import { Preloader } from '../ui/preloader';
import { IngredientDetailsUI } from '../ui/ingredient-details';
import { useSelector } from '../../services/store';
import { getIngridientData } from '../../services/reducers/dataReducer';
import { useParams } from 'react-router-dom';
import { IUseParams } from '@utils-types';

export const IngredientDetails: FC = () => {
  const { id } = useParams<IUseParams>();

  const ingredientData = useSelector(getIngridientData(id as string));

  if (!ingredientData) {
    return <Preloader />;
  }

  return <IngredientDetailsUI ingredientData={ingredientData} />;
};
