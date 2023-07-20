export const IS_DEV = process.env.NODE_ENV === 'development'

export const PLACEHOLDER_URL =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkICAgKCgkLDhcPDg0NDhwUFREXIh4jIyEeICAlKjUtJScyKCAgLj8vMjc5PDw8JC1CRkE6RjU7PDn/2wBDAQoKCg4MDhsPDxs5JiAmOTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTn/wgARCAJWA8kDAREAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAEGAgUH/8QAGgEBAQEBAQEBAAAAAAAAAAAAAAEFBgQDAv/aAAwDAQACEAMQAAAA+uZn4CkgAgJYBAgAAlALIEUIAigSAlBYBAgVECoCIBKIIElEEqIJRIElRJUQSyESUSUSEsiSoglkCSokqIJZBZCJKJKiCJKJBZASwQJKBISgSG55/qoAggASEoAgAAEoEVAgUSChAglABYASAWQEFRAAsgIioglEgqJCIJZKiCWQiCWCWSuUJKJCWQJzRJUQSyCyESVEJKESUSVEERUBKJASwCG45/qUEUIARAIKQRQAgFglAgCogUIgELUFEEKkFCIIKJAAkoRFQJBZASyERUSVEEJZEVEgs5FkSUSEshLIElRFRISwkJZASwSyEsEQRFQEsECShDcc91EUgAgRQgACBQgAsEFhSASiBQiAKgFgAiUlCIBKEQAkoRFQEsEQSyBJUSCyERUSVElEhLIkokqJCJKJLILIRJUQSyCyEFkFkIglggJYIRFDbc91BSCAEQBQAIFCABJQCwCUCALABBUCKKQCWACIJQJAEgqBIKlgiCWQJKiCWQiKiSokokJZElRFRISyBJZBUSJKiQWQWQlkCKiQEJYJRICINtz/AFIJAARAFAAgUIAElABYBKIFAgEBKBFAAElARAJQJAEhKEsERUQSogiSwRJURUSVElEhLIkqJKJCWCJLISwSyESUSCyEsgSUSEFkBLBAQ23P9QgkoQAIAAqIAFAAkqkRaQASwKBAIKgAQKAJBQgQQUSAERUJYCSoglRBElRBLIiokqJBZElRJURUSEsJCWQlkFkIkqISVEVCIqIIioElQBNrz3UwWBAiFWAASiABQhQEUIKIBLAoAEgAoCBFAEgBKBAJYICUSCyBISwQlgiSoglksgshEiKiSokqIJZElRBLISyEsESWQJKiSiShEEsgJRIhdpz3UAgEAFgAgAsACoUIFCCiAEVBQBBAAKAJBQECCCgQSwQCyEFkCQlRBLIElElRJURZEhElRFQlkSUSJKiSokokshCIshLIElElEhEVAkoDZ8904EAAQCVSAUQASgKkLUAsABFQCgCCACgQCAUBAioAioEEFkBElEhKJKiQJKJzRJUSWEhKiRFRJUSVEgsiSokqJLBEgsiSoLIioRBElCWAbPnuoJAAEAEoABYABKJViWoBYAFgEFAAggFAACIAqAIoQIBLBAkoRFRISwQWQiK5SUSVElgiSyESUSVLIRJYObCSokJYSEsgshLIEVEhBZAkobPnungAAQCCgARSFASqkBagQKACwQUACACUAAIEAUBEUBEAlggSUIiokFkJUCSyESVEJKlgiQlkshLISwRJZCWQWRISwkJZKiElSwRIEgqEsGz57p4AAgAgFAAgUIKqQCgFgABFCCgAQCAAUABECgCQUCQEokASVEEslQJCWCWQiSoiyEsiQWQlkJZCWRCSokqJKJLIRJYJZCWQWQJASyAlbPnumgESqEAgFAAgUCRVgCgFgACiASgACCFAIKAAIqABBKAiCUSAiKiQWQlElRILIkqIJZElRILISyEsiSokshLBElkSUSWQlE5okCSoglRBK2XO9MoCFQAQCiFIAoQUQBQAWAALAIWhAAgAAAlAEKRUACShAglEgIiokokJYJUSJKEsiQWRJUSEshLILIkshLIkqIJZLIRJYJZCJKEsEQSog2PP9MEShUEAAFgAgoBRAAoBYAAsACgSKCAAACCgAQqogAlgEQSwQERUSVEVEgshElElRIiokrlFRJZCWRFcpKJElkJZBZElRJUSEoiyBISog2PPdMAqBAACBQAEoBRAFAEUAFEACgQRQCFBABKAABFQAJKAiKiCBJQlkIiokJZBZCIqJLIkqJCWCWQlkSVElkJYSWQlkJZCWEhLBEVEgJUk2PP9MASChACoAFQCgFCpCkoECgFgAhaBCwAAAIFCQoAhSKgASUBEVEECSoLIRFRJUSCyERZCWRJUSEsiK5shLCciyJLISyEshLCSokFgWRIQgTYc/wBMoJJQEACC0BKAAWCkFAgUAFEAhQKAgAAQAKRKpAAgWxAQShECoggshEVEhLIKiQWRJUSWQlkIiyEshLIkqJLILInNRIkpZCIs5FEJKiQgTYYHTQBABABYAAoAEWkAUCBQAUQAKgBUAAKIgACgBABZAASwCIJYIElCJLBKiShEiSyCyEshElRFkTmpZBZEhLIkqJLISwkqJCWQlgJKJAa7A6UgAAgFEACgFIIFABRFQoAohSKgABUABSACACgBAKiACBFEgqEQElRFRBKiQWQlkSVEhLBLIkshLISyJKiSoksiSiSyERXKSoglhFEgNbgdKQCkBBQIAoAAKIAFCItIKKBABKAFCAAoIAAqAAgAqIAIiiQVIWQCyESUSEsEshEVyiyEqJElkFnJLJYJZyglkSWQlkJYJZE5okFkFgiDXYHSQApCAUQAKAEqwogAUQShQBYABKAFCAAoIABKAAAgFkABLASAlkASVEVAkqJLBElRISyEsEsiSyESVLIksgsic1ElElkJZBZEhLBLIEGuwOkAAhEKolAJQEpFsAAUCBQAWAAAShQEAKAQABQEAIABUQCWAEgJZALIRJRJUQSyERUSVElRJUSJLCSubIkokRXKSyEshLILIiyEshKiCGvwOjCkCWCKQUEoAhZRKABRAFAEUAAFQFAQFEKEAAAEoACBFsQAioEEJYIElQWQiLICWRISyEslRISwkqJLISyJLCSonNRJUSWBZElRJZCWCETX4PSQFIEEAFAASgQUhQKIBKAJaAACoUAICiFCAABUAAIAgVAEEoEgqJALIRJRJUQSyBJXKKiSoksiSokSVLIksEshLIkrlJRFkSEshLCShDXYPRxKAQEFAAAktIABQKJKAACwUhSUBQAgBYKoARAVAAAQIAqBFQBIKiCCyERUSUSEqISVElRFkJZCJLISyJLJUSWQlkSVElkCK5SVEWQJKhrsHo4gAAlAACIFAAUCiCCgAogApKAFAQCKoChABAAAAQIoCBJQEohIQJKJCWCVAkshLCSuRZEhLIkqJLIkqWRIkqWQlkSJKBObBLIkpZAa3C6OBEAKgApEqpAAAKpAEtCABFABQpAAVAIqwCiAqAAAAlEAEASUASUIkAshElElRBLILIkJUsiDmyEsiSyEslkSCzlJRJZCWQJKiSwSyCyGswujgKiFCAEqhIAABQAIoAALAAoEBQCAAC0hUAAAAAqAIBACWUgSUSEAshEVElQJLBElRJURZCWQlkSWQlkSWQlkSVElRJRIkqJKJLIRBrMPo5SCUAgoQIAAAoAigAFAgAUAQAAACkpCqQAAAAUAIgEAJYASCoggSVEVCIqIqJElQlhJUSWQlkSJKiSyVEiSyEsEslRISyIqEsiQGsxOhEEUAlAEgAFAAgCgAFgACgAQAAAKAAAAAACoCkCAQBFQECShECyAlkIioiokFkJZEhLISyJLILIc2SyIJZE5onNiokJYJZCJKINXidCIAAARAAFgAAUAARQAAUAQAAAKAAAAAACoAAhSCAIqAlEEQQWQESUJZEVEEshElRFRJZLIRJUSWcksJLIkqJKiSoksESUSWCGrxOhEAABEAAUQAKAAIAoABQhQgAAEqgAAgAKACUgigABBQIISiQBILICCyEsgRZCJKgSWQlksiSokJZK5SWEiSokqJLISyIqEsJCWDV4vQiCAFgkKAIAFAQAWUAAUIUJFqQFJSAoCgAEAAFUEQAACACiQAlggCQUSEJYJZAkokSEokqJLJZCJKiSyEsiSokSWSoksgSVLBLIRFRNZi9DCAIABAgUgKBIKAFABC2QAKQBQAAApKsKggKAFIhSAAAKgQQEogEQQVEEqJBZBZAkIiokqJLFRIkJZLISyEsic2ElRJZCWQlglkCSiarG6EQEQWIVJQAAIoQAAIFAAAAKAAAAUAAAQoAIUghQAKEQKRKkigCQlCIJUQSwSyAiQWRJZBZKiRISyJKiSpZElRJZElkJURUSUSIJWrxughAggQAEUEBQgAAogAAAAUAAAAqFAAQAoAIBAChFogQCUSABBCCoglRFRBLICISVEhLFkJZEEsiSokrlJZKiLIkqJCWSoglhIDU5HQEgBEQFAgEKCAUhQIAAIUhaAAIUgCgCwoQARRUAVCxBQBAAFQSSgCQEokBLBCWCWCBJUSJKJKiSyCyJCWRJXKSlkSWQiSyEsEshEVAarI3oggIAkUgAACgQAAQAFoQACkgoAFQAAoABApAFIChUgAFQBIAEgILICWCVEEsECSokJYSVElRFkSEshLIkqJLILIkqJKiQWQlkBqcndAgklAQAAABAABAKAAAIFAAUAgApAAACgAAAQAACVSJAAEgJQiKiCIqCyEQSokFkSVElElkIkshLISyJKJLIkqJCWCVEhLBqcrdRKQQQAgCAQpAKRRUCFAABFAAAAAKAAAAAAAAIAAIKBBAARBBRIKiCWCBJUQSoglkSVEgshLIkJZKiSyJKJLIRJYJUSVEgomoyt2BAICAIBAAAAUgQKBQCFIAFAAAEBQAAAAACAKQoCBABACBFQBIKJCWCIqEQQlglkSVEESVEVElkObJZAksiSiQlkJUSUSUTT5e4BABJLUgEAAAFJAFAAAQFBKoAAAQAoACgEgCkpFAAQFIgAgBKJACIFkBEUSEokISyCyJKESEsgSWSoks5qISWQlglkIkoSyJBWny9sKSRSQAgACCAoAAAAICgVEoABCkLQAQtCRaQAAAAACFBEEAAJYICBFEgqIILIRBCWCWRJQiSyEIiyVElkJZElEhLJUSEsERZBWnzNuAkggAqBAgCCkVABKoBFAJSAAFBAC0AAAAAAAAAABEAEACCUIASwRAJYILIQJBZCJKiKiSokIiyVElkCc0SVElkokJYIkokrTZm2CQgAIEAEASxKAAoICAoBSEKAUhagKCFAAAAABCgBBACAAIBKEFSRQiCCyAlggSCyESUSVEhLIRFkqJLIElRJUSVEWQiKJCWDS521AQAkihABIABCgIUAQAVQEKAAKQFIAUAAAAAgAACACAAIBKgFRAIgEsgJYIEEshElEhLILIRJZKiKiRJUSEsVygJLILISwaTO2gIAkCAQFIACIUgCVQABBQQFCggABQKhQAABAAAUiAAQABBKEAqIASBJQiKgSCoRIioRJYJZCJKiSwSyEsiCWSogiSyCokomkz9mAEASQKRAIFBJSAKoAIABULAAUhQAACkUlABFAAABAAAIAEVAQBJQBILICIJQiCVElEhElElkIksgshLISyERUSIqJLBKiCVpM/YgqASCBAESgBAAACxKpBAqFAAApCgAAApAUgAAUlIAABSIQqCUBAElARAqJBYICIqESIqESUSJKiCWRJUshElRBLILISwkokIaTw7EBEBIQAQIAAgBSAFIUEBSUBUBSAqgAQFWIABViAAFBAAQpASwACAJKAgsgSCwQESEokSUIkokJZEEshLIiuUlCJLBLIElRFRFaLwbBIEEIAQIAAhSJVgKQAAAAAKoAAFAAEAoIoIAoIAABUgCUQACAIqAgshBZAgJCEokSCokFkJYSEqITmlkJZCIqJElElRBLBovFrwBICBIAIEKAQFAAEBQCAAABQFAoCFACVYAAgACkABKCFkAAILESgIkoRBKIIghLIEgqJKiCWQJKiRFSyEsgSVEiKiQWQVDRePVRCCxEBAQogAkACgAAACiAFABAoCgUAAAAhQIAUEASgCAQAEoggIglCIIihCIqJAkoRILISyJBUQkqWRIKiSokFhISwSoaLx6sQQAhBAgKEAgACkQAUAAUAAARQpCgUFBAQoAAAgABRIpAIAKgQQgCSiQERQhEgokSCyEIipZCIqJEVElElRISwSwRFRIDQ+TViKgJAgSARQQAAAEEUAKQoAFAALAAWpKoAEUVAAAEABQiAAQACoghAggsgIglCJBUQRFRISiRJUQSyCyJKJKiQlElEiKgSVoPJqQAgJBIAAAIIqSgAAIVRBQKAAACiAUCgAEBQIUhQAQFRCkAgAJREShAkFkBEEoRBEVEgshCWCWQiBZDlFSyCyESURUQSyBIaDy6kBAEixAREACkpABKQFAApAtQVQEAAUKRKsCWgAKBRIJQAQFEikQoQAgsEBEECKhAiokBEVEEqIJZCJKJCWQiKiSiSoglgiSpYhRPf8ANqQgEEhCFSCAAAAEAAFAAFKAFQFWIULSIEFoAAUllJKAAQoIlEAEAILAIRBASwCIqJARFRIKiCJKiCVEJzQlkJYSCyEsESUIioe/5tOIAIQQCQACABCgAAAQUCgoAUBAoUgogoAAAsKEAAhSFQBAIAQIqBBCAlkASUIkCKhElEESVEESUOUVLIElRFRILIioElQ9/wA2kIARIoSCAAiBKAKAABABRQUAKEKsAAtQqABSAFgSgAKSFCABBACBFQJAQEsgIihEgSCokCSoLIRFRIglRJRJURRISyBBLIK93z6QEgCJCkAiBAAgoAAoAAEUKBQFIloAC0CKQpACxABQCAqxKgKQiACIBKJAQJKhKIIEhAkJRCSoElRBLIglkJRJURROQkoglgle759IRAICCAEQIAEAoAAoKQFgFFABVQAC0ARQAQFgpCrESkUlBCoUiCAECCEoggSVAkAqJAkILIEgshKiCWQJKiQWQWCWQiSgSWAe58NKAIICQQAsEiggAFCBQCgQAUUABbAFAUAWABCiCgikCKQKAEQAQAiKkSiCBISiQEqIIEhEVEVAkqIJZCIJUQSxUQkqCyBCSh7fw0hAgAJBAAgAgAUQthYAoAgqkWggVUAtShRIFAAhRbAgBEWoIAAsiiQsAJCEFggSBJUBCWAkIRFRBKJCIqWQJCEsEsEsJKEsERUQe38dISQAEEAgCAARCgBQKIoBCqLCggFFlFAKIAKAQFQAAICpACCkCUQCBIQUSBICJKgIioghEEsEokIipZAnIFkFkJYCSoioioE9v46REAkBAAIAEBIAqghUUFAItBYCkooEpC0AogFAIChCkAACJSAiFgFiBKJCCogiARJUIEVAkIglkBLBEVEhLIBZEEsVAkokqBJQ9z46EAgkBAAIAEBIAqgAWBSBRQIoC0AKgUFAgFAqFgAAEACFskQBBFgsAJCAlgiCBJUIElCIIgiShKiCWElRBAksEokokFkJRIK9z46EEEEBAABAgAgAoAFEAFFEFqAtAAgVRSxAFAIUABKCAARBAQACyQJYICIqIIElQiASwQiCEsgSCyCyCyAiKiQWCWQlEgsEr3PjoxIVBIEAAgCAACAUCiAAUUohSBVAolAogAFAAQoItqSAAgCQAgCCAJKgIglggSEqIBElCJARFRILBElElQIJZAkoSxUQSiD2/lowICCQICFIAIAFJFIFogKssKhaBAFUWAKRbCkAoAQBRSAIACAECAQIIARJQiAc2AkIRFCJCCohBCWQVEEsERUSUIglkogVyLCD2/lowICCAggAQCIUARQFQpApFqVQEAULYAqhC1IUAAIFAABACAAiAQBICBIQUSERQiQiASyEBLCQEsgqIIiokoRFRILIBYqERRPb+WhABIqEhSABABACFWAVAtIKBQFQBQUQKoAASikALBQQACAEABEAgIggIkFEhEESWkgQRJQhEVEEJZAioglkFQJLBBZBYJRJQ9v5++CAQQRKQAAJAAALYCBQAooAVApRBRQAAqBSAogoICkEAIAARBARIARIAkqIIQJBZAkJQiCWCEsEQSwSoElEgRUFkoglElf/xAAWEAADAAAAAAAAAAAAAAAAAAARoMD/2gAIAQEAAT8AtEQ1b//EABQRAQAAAAAAAAAAAAAAAAAAAND/2gAIAQIBAT8ADvv/xAAUEQEAAAAAAAAAAAAAAAAAAADQ/9oACAEDAQE/AA77/9k='
