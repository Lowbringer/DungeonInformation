import sys
import pdb
from slpp import slpp as lua


dungeonEnemiesKeys = [
    { "mdt": "id", "di": "wowId"},
    { "mdt": "name", "di": "name"},
    { "mdt": "", "di": ""},
    { "mdt": "", "di": ""},
    { "mdt": "", "di": ""},
    { "mdt": "", "di": ""},
    { "mdt": "", "di": ""},
    { "mdt": "", "di": ""},
    { "mdt": "", "di": ""},

]


def dungeonEnemies(decodedEnemies):

    enemies = []
    groups = {}


    id = 1
    while decodedEnemies[id] is not ";" and id in decodedEnemies.keys():
        newEnemy = {}
        newEnemy["id"] = id
        pdb.set_trace()
        id += 1


def main():
    if len(sys.argv) is not 2:
        print "To use this script, please provide the filename of a mdt lua object"
        print "These files need a bit of formating, refer the README to know how to create them"
        print "eg: './MdtToJson.py freeholdDungeonEnemies.lua'"
    
    f = open(sys.argv[1], "r")
    enemies = lua.decode(f.read())
    dungeonEnemies(enemies)



if __name__ == "__main__":
    main()