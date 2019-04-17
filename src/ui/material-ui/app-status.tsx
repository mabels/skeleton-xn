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
import { AppModelContext } from '../app-model-context';
import { AppModel } from '../../model/app-model';

export interface AppStatusProps {}

const AppList = observer(({ app }: { app: AppModel }) => {
  return (
    <>
      <ListItem>
        <ListItemIcon>
          <FolderIcon />
        </ListItemIcon>
        <ListItemText primary={app.ticker.value} />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <FolderIcon />
        </ListItemIcon>
        <ListItemText primary={app.whatToSay.get()} />
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

          /* {(app: AppModel) => (
            <>
              <ListItem>
                <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon>
                <ListItemText primary={app.ticker.value} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon>
                <ListItemText primary={app.whatToSay.get()} />
              </ListItem>
            </>
          )} */
