import * as React from 'react';
import { observer } from 'mobx-react';
import { Card, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import { AppModelProp } from '../app-model-prop';

export interface AppStatusProps extends AppModelProp {
}

export const AppStatus = observer((props: AppStatusProps) => {
  return <Card>
    <List>
      <ListItem>
        <ListItemIcon>
            <FolderIcon />
        </ListItemIcon>
        <ListItemText primary={props.app.ticker.value} />
      </ListItem>
      <ListItem>
        <ListItemIcon>
            <FolderIcon />
        </ListItemIcon>
        <ListItemText primary={props.app.whatToSay.get()} />
      </ListItem>
    </List>
    </Card>;
});
