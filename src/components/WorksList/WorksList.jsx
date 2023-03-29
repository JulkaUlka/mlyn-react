import { Item, List, Text, LinkStyled } from './WorksList.styled';
import { useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

import { Container } from 'components/App.styled';
import { photo } from 'components/helpers/photo';

function getClassName(id) {
  if ([2,3,5,6,7,10,11,12,13,14,15].includes(id)) {
    return "w-1";
  } else if ([1,8,9].includes(id)) {
    return "w-2";
  } else if (id === 4) {
    return "w-3";
  } else if (id === 16) {
    return "w-4";
  } else {
    return "";
  }
}

export function WorksList() {
  const location = useLocation();
  return (
    <Container>
      <List className="gallery-container">
        {photo.map(({ id, src, title }) => (
          <Item key={id} className={`gallery-item ${getClassName(id)}`}>
            <LinkStyled
              to={`/works/${id}`}
              state={{ from: location }}
              className="image"
            >
              {src ? <img src={src} alt="office" /> : <Loader />}
              <Text className="text">{title}</Text>
            </LinkStyled>
          </Item>
        ))}
      </List>
    </Container>
  );
}