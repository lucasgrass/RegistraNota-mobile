import * as React from "react";
import { View, TouchableOpacity } from "react-native";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Text } from "~/components/ui/text";

export default function RecoveryPassword({ navigation }: { navigation: any }) {
  return (
    <View className="flex-1 justify-center p-6">
      <Card>
        <CardHeader>
          <CardTitle>Recuperação de Senha</CardTitle>
          <CardDescription>
            Preencha as informações abaixo para recuperar sua senha.
          </CardDescription>
        </CardHeader>
        <CardContent className="gap-4 native:gap-6">
          <View className="gap-1">
            <Text>Email</Text>
            <Input placeholder="Seu email" />
          </View>
          <View className="gap-1">
            <Text>Código de usuário</Text>
            <Input placeholder="Seu código de usuário" />
          </View>
        </CardContent>
        <CardFooter className="justify-center flex-col native:gap-6">
          <Button className="w-full">
            <Text>Recuperar Senha</Text>
          </Button>
          <View className="gap-1 flex-row">
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text className="text-blue-500 underline">Voltar ao login</Text>
            </TouchableOpacity>
          </View>
        </CardFooter>
      </Card>
    </View>
  );
}
