import * as React from "react";
import { LifeCycleAppModel } from "@skeleton-xn/app-model-context";
import { AppStatus } from "./app-status";
import { InputWhatToSay } from "./input-what-to-say";
import { Text } from "react-native";
// import {
//   ActionButton,
//   Avatar,
//   ListItem,
//   Toolbar,
//   BottomNavigation,
//   Icon,
// } from "react-native-material-ui";

export interface FormStateExpo {
  readonly title?: string;
  readonly tickFreq?: number;
}

export function FormStateExpo(props: FormStateExpo): JSX.Element {
  return (
    <>
      <LifeCycleAppModel />
      {/* <Toolbar
                    key="toolbar"
                    leftElement="clear"
                    onLeftElementPress={() => {}}
                    centerElement={"Jo"}
                    rightElement={['delete']}
                    style={{
                        container: { backgroundColor: 'white' },
                        titleText: { color: 'rgba(0,0,0,.87)' },
                        leftElement: { color: 'rgba(0,0,0,.54)' },
                        rightElement: { color: 'rgba(0,0,0,.54)' },
                    }}
                />
      <ActionButton
        actions={[
          { icon: "email", label: "Email" },
          { icon: "phone", label: "Phone" },
          { icon: "sms", label: "Text" },
          { icon: "favorite", label: "Favorite" },
        ]}
        icon="share"
        transition="speedDial"
        onPress={() => {}}
        style={{
          positionContainer: { bottom: 76 },
        }}
      />
      <BottomNavigation
        active={"Act"}
        hidden={false}
        style={{
          container: { position: "absolute", bottom: 0, left: 0, right: 0 },
        }}
      >
        <BottomNavigation.Action
          key="today"
          icon={<Icon name="today" />}
          label="Today"
          onPress={() => {}}
        />
        <BottomNavigation.Action
          key="people"
          icon="people"
          label="People"
          onPress={() => {}}
        />
        <BottomNavigation.Action
          key="bookmark-border"
          icon="bookmark-border"
          label="Bookmark"
          onPress={() => {}}
        />
        <BottomNavigation.Action
          key="settings"
          icon="settings"
          label="Settings"
          onPress={() => {}}
        />
      </BottomNavigation> */}

      <>
        <Text>FormStateExpo</Text>
        <InputWhatToSay />
        <AppStatus />
      </>
    </>
  );
}
