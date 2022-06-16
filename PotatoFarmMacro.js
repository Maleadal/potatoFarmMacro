startZ = 80;
startY = 242;
startX = -74;
endZ = -78;
endY = 29;
endX = -72;
currentX = Math.ceil(Player.getPlayer().getX());
currentY = Math.ceil(Player.getPlayer().getY());
currentZ = Math.ceil(Player.getPlayer().getZ());
adjustX = false;
adjustY = false;
pressedKeys = KeyBind.getPressedKeys();
Chat.log("Farming Start!");
KeyBind.keyBind("key.attack", true);
while(Player.openInventory().getSelectedHotbarSlotIndex() == 1){
    if(currentX == startX){
        if(adjustX == false){
            Player.getPlayer().lookAt(90, 5);
            adjustX == true;
            adjustY == false;
        }
        if(currentZ == startZ){
            KeyBind.keyBind('key.left', false);
            KeyBind.keyBind('key.right', true);
        }
        else if(currentZ == endZ){
            KeyBind.keyBind('key.right', false);
            KeyBind.keyBind('key.left', true);
        }
    }
    else if(currentX == endX){
        if(adjustX == false){
            Player.getPlayer().lookAt(-90, 5);
            adjustX == true;
            adjustY == false;
        }
        if(currentZ == startZ){
            KeyBind.keyBind('key.left', true);
            KeyBind.keyBind('key.right', false);
        }
        else if(currentZ == endZ){
            KeyBind.keyBind('key.right', true);
            KeyBind.keyBind('key.left', false);
        }
    }

    currentZ = Math.ceil(Player.getPlayer().getZ());
    currentX = Math.ceil(Player.getPlayer().getX());
    currentY = Math.ceil(Player.getPlayer().getY());
    Client.waitTick(5);
}


KeyBind.keyBind('key.attack', false);
KeyBind.keyBind('key.right', false);
KeyBind.keyBind('key.left', false);

Chat.log("Farming Done!");