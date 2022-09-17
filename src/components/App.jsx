import { Container } from 'components/Container/Container';
import { Profile } from 'components/Profile/Profile';
import { Statistic } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import {TransactionHistory} from 'components/TransactionHistory/TransactionHistory'

import user from 'data/user.json';
import statisticalData from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json'; 

export const App = () => { 
  return (
     <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title="Upload stats" stats={statisticalData} />
      {/* <Statistic stats={statisticalData} /> */}
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
