image_array = ["brickFloor","bricks","bricks2","bricksCorNE","bricksCorNW","bricksCorSE","bricksCorSW","bricksEdgeE","bricksEdgeN","bricksEdgeNE","bricksEdgeNW","bricksEdgeS","bricksEdgeSE","bricksEdgeSW","bricksEdgeW","bricksVines","conCorNE","conCorNW","conCorSE","conCorSW","concrete","concrete2","concreteBrickWall","concreteVines","concreteWall","concreteWallTop","conEdgeE","conEdgeN","conEdgeNE","conEdgeNW","conEdgeS","conEdgeSE","conEdgeSW","conEdgeW","crackedStoneWall","crackedStoneWall2","crackedStoneWallTop","mossBrickWall","mossCorNE","mossCorNW","mossCorSE","mossCorSW","mossEdgeE","mossEdgeN","mossEdgeNE","mossEdgeNW","mossEdgeS","mossEdgeSE","mossEdgeSW","mossEdgeW","mossVines","mossWall","mossWallTop","stoneCorNE","stoneCorNW","stoneCorSE","stoneEdgeE","stoneEdgeN","stoneEdgeNE","stoneEdgeNW","stoneEdgeS","stoneEdgeSE","stoneEdgeSW","stoneEdgeW","stoneFloor","stoneVines","stoneVines2","stoneWall","stoneWallTop","dirt","dirtE","dirtN","dirtNE","dirtNW","dirtS","dirtSE","dirtSW","dirtW","grass","grass2","grass3","grass4","sapling","shrub","tree","altar","coffin","lightE","lightN","lightS","lightStand","lightW","pillar","pillar2","pillar2Arch","pillar2ArchE","pillar2ArchFork","pillar2ArchW","pillar2Base","pillar2BaseCracked","pillar2Cracked","pillarArch","pillarArchCrackedE","pillarArchFork","pillarArchW","pillarBase","pillarBaseCracked","pillarCracked","statue","statue2","statue3","dark","darkX5","button","button2","button2Press","buttonPress","EWdoor2Closed","EWdoor2Open","EWdoorClosed","EWdoorOpen","NSdoor2Closed","NSdoor2Open","NSdoorClosed","NSdoorOpen","rock","rock2","rock3","switch","switch2","switch2Press","switchPress","wireEN","wireES","wireEW","wireEWN","wireNES","wireNEW","wireNWS","wireWN","wireWS","wireNS","wireNSEW","East1","East2","East3","East4","Idle1","Idle2","Idle3","North1","North2","North3","North4","South1","South2","South3","South4","West1","West2","West3","West4","clip"]; dir_array = ["images/cibola/wf/brickFloor.png","images/cibola/wf/bricks.png","images/cibola/wf/bricks2.png","images/cibola/wf/bricksCorNE.png","images/cibola/wf/bricksCorNW.png","images/cibola/wf/bricksCorSE.png","images/cibola/wf/bricksCorSW.png","images/cibola/wf/bricksEdgeE.png","images/cibola/wf/bricksEdgeN.png","images/cibola/wf/bricksEdgeNE.png","images/cibola/wf/bricksEdgeNW.png","images/cibola/wf/bricksEdgeS.png","images/cibola/wf/bricksEdgeSE.png","images/cibola/wf/bricksEdgeSW.png","images/cibola/wf/bricksEdgeW.png","images/cibola/wf/bricksVines.png","images/cibola/wf/conCorNE.png","images/cibola/wf/conCorNW.png","images/cibola/wf/conCorSE.png","images/cibola/wf/conCorSW.png","images/cibola/wf/concrete.png","images/cibola/wf/concrete2.png","images/cibola/wf/concreteBrickWall.png","images/cibola/wf/concreteVines.png","images/cibola/wf/concreteWall.png","images/cibola/wf/concreteWallTop.png","images/cibola/wf/conEdgeE.png","images/cibola/wf/conEdgeN.png","images/cibola/wf/conEdgeNE.png","images/cibola/wf/conEdgeNW.png","images/cibola/wf/conEdgeS.png","images/cibola/wf/conEdgeSE.png","images/cibola/wf/conEdgeSW.png","images/cibola/wf/conEdgeW.png","images/cibola/wf/crackedStoneWall.png","images/cibola/wf/crackedStoneWall2.png","images/cibola/wf/crackedStoneWallTop.png","images/cibola/wf/mossBrickWall.png","images/cibola/wf/mossCorNE.png","images/cibola/wf/mossCorNW.png","images/cibola/wf/mossCorSE.png","images/cibola/wf/mossCorSW.png","images/cibola/wf/mossEdgeE.png","images/cibola/wf/mossEdgeN.png","images/cibola/wf/mossEdgeNE.png","images/cibola/wf/mossEdgeNW.png","images/cibola/wf/mossEdgeS.png","images/cibola/wf/mossEdgeSE.png","images/cibola/wf/mossEdgeSW.png","images/cibola/wf/mossEdgeW.png","images/cibola/wf/mossVines.png","images/cibola/wf/mossWall.png","images/cibola/wf/mossWallTop.png","images/cibola/wf/stoneCorNE.png","images/cibola/wf/stoneCorNW.png","images/cibola/wf/stoneCorSE.png","images/cibola/wf/stoneEdgeE.png","images/cibola/wf/stoneEdgeN.png","images/cibola/wf/stoneEdgeNE.png","images/cibola/wf/stoneEdgeNW.png","images/cibola/wf/stoneEdgeS.png","images/cibola/wf/stoneEdgeSE.png","images/cibola/wf/stoneEdgeSW.png","images/cibola/wf/stoneEdgeW.png","images/cibola/wf/stoneFloor.png","images/cibola/wf/stoneVines.png","images/cibola/wf/stoneVines2.png","images/cibola/wf/stoneWall.png","images/cibola/wf/stoneWallTop.png","images/cibola/ext/dirt.png","images/cibola/ext/dirtE.png","images/cibola/ext/dirtN.png","images/cibola/ext/dirtNE.png","images/cibola/ext/dirtNW.png","images/cibola/ext/dirtS.png","images/cibola/ext/dirtSE.png","images/cibola/ext/dirtSW.png","images/cibola/ext/dirtW.png","images/cibola/ext/grass.png","images/cibola/ext/grass2.png","images/cibola/ext/grass3.png","images/cibola/ext/grass4.png","images/cibola/ext/sapling.png","images/cibola/ext/shrub.png","images/cibola/ext/tree.png","images/cibola/dec/altar.png","images/cibola/dec/coffin.png","images/cibola/dec/lightE.png","images/cibola/dec/lightN.png","images/cibola/dec/lightS.png","images/cibola/dec/lightStand.png","images/cibola/dec/lightW.png","images/cibola/dec/pillar.png","images/cibola/dec/pillar2.png","images/cibola/dec/pillar2Arch.png","images/cibola/dec/pillar2ArchE.png","images/cibola/dec/pillar2ArchFork.png","images/cibola/dec/pillar2ArchW.png","images/cibola/dec/pillar2Base.png","images/cibola/dec/pillar2BaseCracked.png","images/cibola/dec/pillar2Cracked.png","images/cibola/dec/pillarArch.png","images/cibola/dec/pillarArchCrackedE.png","images/cibola/dec/pillarArchFork.png","images/cibola/dec/pillarArchW.png","images/cibola/dec/pillarBase.png","images/cibola/dec/pillarBaseCracked.png","images/cibola/dec/pillarCracked.png","images/cibola/dec/statue.png","images/cibola/dec/statue2.png","images/cibola/dec/statue3.png","images/cibola/light/dark.png","images/cibola/light/darkX5.png","images/cibola/puz/button.png","images/cibola/puz/button2.png","images/cibola/puz/button2Press.png","images/cibola/puz/buttonPress.png","images/cibola/puz/EWdoor2Closed.png","images/cibola/puz/EWdoor2Open.png","images/cibola/puz/EWdoorClosed.png","images/cibola/puz/EWdoorOpen.png","images/cibola/puz/NSdoor2Closed.png","images/cibola/puz/NSdoor2Open.png","images/cibola/puz/NSdoorClosed.png","images/cibola/puz/NSdoorOpen.png","images/cibola/puz/rock.png","images/cibola/puz/rock2.png","images/cibola/puz/rock3.png","images/cibola/puz/switch.png","images/cibola/puz/switch2.png","images/cibola/puz/switch2Press.png","images/cibola/puz/switchPress.png","images/cibola/puz/wireEN.png","images/cibola/puz/wireES.png","images/cibola/puz/wireEW.png","images/cibola/puz/wireEWN.png","images/cibola/puz/wireNES.png","images/cibola/puz/wireNEW.png","images/cibola/puz/wireNWS.png","images/cibola/puz/wireWN.png","images/cibola/puz/wireWS.png","images/cibola/puz/wireNS.png","images/cibola/puz/wireNSEW.png","images/cibola/player/East1.png","images/cibola/player/East2.png","images/cibola/player/East3.png","images/cibola/player/East4.png","images/cibola/player/Idle1.png","images/cibola/player/Idle2.png","images/cibola/player/Idle3.png","images/cibola/player/North1.png","images/cibola/player/North2.png","images/cibola/player/North3.png","images/cibola/player/North4.png","images/cibola/player/South1.png","images/cibola/player/South2.png","images/cibola/player/South3.png","images/cibola/player/South4.png","images/cibola/player/West1.png","images/cibola/player/West2.png","images/cibola/player/West3.png","images/cibola/player/West4.png","images/cibola/light/clip.png"]; load_assets_2();
