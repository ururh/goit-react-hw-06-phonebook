import { useDispatch, useSelector } from 'react-redux';
import { qwery } from 'redux/sliceFilter';
import { svgGood } from './svg/icon';
import { FilterLabel, Icon, InputSearch, SpanFilter } from './Filter.module';

export const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  return (
    <FilterLabel>Find contacts by name
      <SpanFilter>
        <InputSearch type="text" value={filter} onChange={evt => dispatch(qwery(evt.currentTarget.value))} name="filter" />
        <Icon>{svgGood}</Icon>
      </SpanFilter>
    </FilterLabel>
  );
};
