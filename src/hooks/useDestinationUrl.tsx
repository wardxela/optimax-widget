import { useContext } from 'react';
import { containerId, dataSource } from 'config';
import { SurveyContext } from 'context/survey';
import { SurveyContextInterface } from 'context/types';

export function useDestinationUrl(): string {
  const survey = useContext(SurveyContext);

  const baseUrl = document.getElementById(containerId)?.dataset?.[dataSource];

  if (baseUrl === undefined) {
    return `Empty data-${dataSource} attribute on #${containerId} element.`;
  }

  try {
    const url = new URL(baseUrl);

    let field: keyof SurveyContextInterface;

    for (field in survey) {
      const param = survey[field];

      if (
        typeof param === 'function' ||
        param === null ||
        ((Array.isArray(param) || typeof param === 'string') &&
          param.length === 0)
      ) {
        continue;
      }

      url.searchParams.append(field, param.toString());
    }

    return url.toString();
  } catch (error) {
    return `Invalid data-${dataSource} attribute value on #${containerId} element.`;
  }
}
