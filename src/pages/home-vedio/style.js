import {
  View
} from '@tarojs/components'
import {
  styled
} from 'linaria/react'

export const VideoWrapper = styled(View)`
  display:flex;
  flex-wrap:wrap;
  justify-content:space-around;
  
  .item {
    width: 48%;
  }
`;
