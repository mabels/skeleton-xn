import * as React from 'react';
import { observer } from 'mobx-react';
import {
  Card,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import { AppModelContext } from '@skeleton-xn/app-model-context';
import { AppModel } from '@skeleton-xn/models';
import { ListItemTextProps } from '@material-ui/core/ListItemText';

export interface AppStatusProps {}

export function ListItemTextWhatToSay(props: ListItemTextProps): JSX.Element {
  return <ListItemText {...props} />;
}

export function ListItemTextTicker(props: ListItemTextProps): JSX.Element {
  return <ListItemText {...props} />;
}

const AppList = observer(({ app }: { app: AppModel }) => {
  return (
    <>
      <ListItem>
        <ListItemIcon>
          <FolderIcon />
        </ListItemIcon>
        <ListItemTextTicker primary={app.ticker.value} />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <FolderIcon />
        </ListItemIcon>
        <ListItemTextWhatToSay primary={app.whatToSay.get()} />
      </ListItem>
    </>
  );
});

export const AppStatus = (props: AppStatusProps) => {
  return (
    <Card>
      <List>
        <AppModelContext.Consumer>
          {(app: AppModel) => <AppList app={app} />}
        </AppModelContext.Consumer>
      </List>
    </Card>
  );
};
