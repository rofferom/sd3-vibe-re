/* @ts-self-types="./sd3_core.d.ts" */

/**
 * One area's placed actors, resolved to poses, positions and colours.
 *
 * The pixels are 4bpp palette indices and the colours are BGR555 words, the
 * same pair `BgMapStateV1` hands over - what turns them into an image is the
 * caller's, and it is the only place they become bytes anyone can look at.
 */
export class AreaActorSpritesV1 {
    static __wrap(ptr) {
        const obj = Object.create(AreaActorSpritesV1.prototype);
        obj.__wbg_ptr = ptr;
        AreaActorSpritesV1Finalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        AreaActorSpritesV1Finalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_areaactorspritesv1_free(ptr, 0);
    }
    /**
     * The area's OBJ CHR, as one VRAM image starting at `chr_vram_word()`.
     * This is the tile data the engine DMAs at spawn, not a picture: a pose's
     * tiles are not contiguous, because a batch's two jobs sit a VRAM row
     * apart and the row between belongs to other poses.
     * @returns {Uint8Array}
     */
    chr() {
        const ret = wasm.areaactorspritesv1_chr(this.__wbg_ptr);
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * The OBJ-VRAM word the CHR image begins at.
     * @returns {number}
     */
    chr_vram_word() {
        const ret = wasm.areaactorspritesv1_chr_vram_word(this.__wbg_ptr);
        return ret;
    }
    /**
     * How many of the placements came from a group record's cells rather
     * than from a record naming its actor outright.
     * @returns {number}
     */
    group_actors() {
        const ret = wasm.areaactorspritesv1_group_actors(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    no_value() {
        const ret = wasm.areaactorspritesv1_no_value(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * The OAM priority every actor spawns at, from the byte the object
     * initialiser writes. In mode 1 it decides whether an actor stands in
     * front of the room's foreground or behind it.
     * @returns {number}
     */
    obj_priority() {
        const ret = wasm.areaactorspritesv1_obj_priority(this.__wbg_ptr);
        return ret;
    }
    /**
     * The `$2101` the field runs with: object size select, name select and
     * the name base the CHR image sits at.
     * @returns {number}
     */
    obj_sel() {
        const ret = wasm.areaactorspritesv1_obj_sel(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    object_count() {
        const ret = wasm.areaactorspritesv1_object_count(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    object_row_words() {
        const ret = wasm.areaactorspritesv1_object_row_words(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * Every pose's OAM entries, front-most first: the signed offset from the
     * actor's origin, the tile name, and the flips. A lower index is drawn in
     * front of a higher one, which is the order `FD6F41` files them in.
     * @returns {Uint32Array}
     */
    object_rows() {
        const ret = wasm.areaactorspritesv1_object_rows(this.__wbg_ptr);
        var v1 = getArrayU32FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * Sixteen BGR555 words per pose, in sprite order. Colour 0 is the shared
     * OBJ transparent slot and is zero.
     * @returns {Uint16Array}
     */
    palettes() {
        const ret = wasm.areaactorspritesv1_palettes(this.__wbg_ptr);
        var v1 = getArrayU16FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 2, 2);
        return v1;
    }
    /**
     * @returns {number}
     */
    placement_count() {
        const ret = wasm.areaactorspritesv1_placement_count(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    placement_row_words() {
        const ret = wasm.areaactorspritesv1_placement_row_words(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * Every placed actor: where its record sits in the script, the entity id
     * it names, the dialog it activates - `no_value()` for none - its spawn
     * condition, its origin in map pixels, the two facing bits and the
     * direction they quantise to, which sprite row it stands in, and why it
     * stands in none. Exactly one of the last two is `no_value()`.
     * @returns {Uint32Array}
     */
    placement_rows() {
        const ret = wasm.areaactorspritesv1_placement_rows(this.__wbg_ptr);
        var v1 = getArrayU32FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * @returns {number}
     */
    sprite_count() {
        const ret = wasm.areaactorspritesv1_sprite_count(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    sprite_row_words() {
        const ret = wasm.areaactorspritesv1_sprite_row_words(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * Every distinct pose: its animation id, direction and palette group, the
     * frame number animation 0 opens on, the signed offset and size of the
     * rectangle its objects cover, where its OAM entries, its CHR and its
     * sixteen palette words sit in the flat arrays, the OBJ-VRAM word its CHR
     * belongs at, and the object flips that were applied.
     * @returns {Uint32Array}
     */
    sprite_rows() {
        const ret = wasm.areaactorspritesv1_sprite_rows(this.__wbg_ptr);
        var v1 = getArrayU32FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * Placements whose spawn condition is the event-flag form. They are
     * placed and counted, because no ROM-only decode can settle them.
     * @returns {number}
     */
    undecidable() {
        const ret = wasm.areaactorspritesv1_undecidable(this.__wbg_ptr);
        return ret >>> 0;
    }
}
if (Symbol.dispose) AreaActorSpritesV1.prototype[Symbol.dispose] = AreaActorSpritesV1.prototype.free;

export class AreaActorsV1 {
    static __wrap(ptr) {
        const obj = Object.create(AreaActorsV1.prototype);
        obj.__wbg_ptr = ptr;
        AreaActorsV1Finalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        AreaActorsV1Finalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_areaactorsv1_free(ptr, 0);
    }
    /**
     * @returns {number}
     */
    count() {
        const ret = wasm.areaactorsv1_count(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {Uint16Array}
     */
    dialogs() {
        const ret = wasm.areaactorsv1_dialogs(this.__wbg_ptr);
        var v1 = getArrayU16FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 2, 2);
        return v1;
    }
    /**
     * @returns {Uint8Array}
     */
    group_cells() {
        const ret = wasm.areaactorsv1_group_cells(this.__wbg_ptr);
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * @returns {number}
     */
    no_level() {
        const ret = wasm.areaactorsv1_no_level(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    row_words() {
        const ret = wasm.areaactorsv1_row_words(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {Uint16Array}
     */
    rows() {
        const ret = wasm.areaactorsv1_rows(this.__wbg_ptr);
        var v1 = getArrayU16FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 2, 2);
        return v1;
    }
}
if (Symbol.dispose) AreaActorsV1.prototype[Symbol.dispose] = AreaActorsV1.prototype.free;

export class AreaCollisionV1 {
    static __wrap(ptr) {
        const obj = Object.create(AreaCollisionV1.prototype);
        obj.__wbg_ptr = ptr;
        AreaCollisionV1Finalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        AreaCollisionV1Finalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_areacollisionv1_free(ptr, 0);
    }
    /**
     * One D7D610 remapped corner mask per cell, row-major.
     * @returns {Uint8Array}
     */
    corner_masks() {
        const ret = wasm.areacollisionv1_corner_masks(this.__wbg_ptr);
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * @returns {number}
     */
    height() {
        const ret = wasm.areacollisionv1_height(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * One C11776 branch family per cell, row-major. These are routes, not
     * walkability: every one stops at the first test needing the live object
     * record, the probe coordinates, staged motion or transition state.
     * @returns {Uint8Array}
     */
    routes() {
        const ret = wasm.areacollisionv1_routes(this.__wbg_ptr);
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * @returns {number}
     */
    width() {
        const ret = wasm.areacollisionv1_width(this.__wbg_ptr);
        return ret >>> 0;
    }
}
if (Symbol.dispose) AreaCollisionV1.prototype[Symbol.dispose] = AreaCollisionV1.prototype.free;

export class AreaGatesV1 {
    static __wrap(ptr) {
        const obj = Object.create(AreaGatesV1.prototype);
        obj.__wbg_ptr = ptr;
        AreaGatesV1Finalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        AreaGatesV1Finalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_areagatesv1_free(ptr, 0);
    }
    /**
     * @returns {number}
     */
    count() {
        const ret = wasm.areagatesv1_count(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    entrance_count() {
        const ret = wasm.areagatesv1_entrance_count(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    entrance_row_words() {
        const ret = wasm.areagatesv1_entrance_row_words(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {Uint32Array}
     */
    entrance_rows() {
        const ret = wasm.areagatesv1_entrance_rows(this.__wbg_ptr);
        var v1 = getArrayU32FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * @returns {number}
     */
    event_link_count() {
        const ret = wasm.areagatesv1_event_link_count(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    event_link_row_words() {
        const ret = wasm.areagatesv1_event_link_row_words(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * What each of this area's event gates can ask the transition directory
     * for.
     *
     * `settled` marks the one shape a caller may present as a followable
     * link: a request the script's own blocks make, and the only one they
     * make. Everything else is a candidate - either the script asks for
     * more than one transition, or the request is only reachable through a
     * gosub or a jump, which story state decides.
     *
     * event index, settled, reached (0 own, 1 through a transfer), class
     * (1 direct, 2 return), transition index, destination, presentation,
     * spawn x, spawn y, spawn plane, spawn nudge, return handler.
     * @returns {Uint32Array}
     */
    event_link_rows() {
        const ret = wasm.areagatesv1_event_link_rows(this.__wbg_ptr);
        var v1 = getArrayU32FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * @returns {number}
     */
    no_value() {
        const ret = wasm.areagatesv1_no_value(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    row_words() {
        const ret = wasm.areagatesv1_row_words(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {Uint32Array}
     */
    rows() {
        const ret = wasm.areagatesv1_rows(this.__wbg_ptr);
        var v1 = getArrayU32FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * Where that pointer stood once both planes had been scanned.
     * @returns {number}
     */
    special_cell_payload_end() {
        const ret = wasm.areagatesv1_special_cell_payload_end(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * Where the shared payload pointer stood as this plane's scan began.
     * Both planes consume from one pointer and BG1 is scanned first, so a
     * plane's records only mean anything against the place they came from.
     * @param {number} plane
     * @returns {number}
     */
    special_cell_payload_start(plane) {
        const ret = wasm.areagatesv1_special_cell_payload_start(this.__wbg_ptr, plane);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return ret[0] >>> 0;
    }
    /**
     * The exact four-byte C248DF scripted-cell records for one plane, plus
     * its `$FFFF` terminator. Plane 0 is BG1 and plane 1 is BG2.
     * @param {number} plane
     * @returns {Uint8Array}
     */
    special_cells(plane) {
        const ret = wasm.areagatesv1_special_cells(this.__wbg_ptr, plane);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
}
if (Symbol.dispose) AreaGatesV1.prototype[Symbol.dispose] = AreaGatesV1.prototype.free;

export class AreaGraphV1 {
    static __wrap(ptr) {
        const obj = Object.create(AreaGraphV1.prototype);
        obj.__wbg_ptr = ptr;
        AreaGraphV1Finalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        AreaGraphV1Finalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_areagraphv1_free(ptr, 0);
    }
    /**
     * How many entries the bank-$CB descriptor array holds, derived from the
     * ROM rather than asserted.
     * @returns {number}
     */
    descriptor_count() {
        const ret = wasm.areagraphv1_descriptor_count(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    directory_count() {
        const ret = wasm.areagraphv1_directory_count(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    directory_row_words() {
        const ret = wasm.areagraphv1_directory_row_words(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {Uint32Array}
     */
    directory_rows() {
        const ret = wasm.areagraphv1_directory_rows(this.__wbg_ptr);
        var v1 = getArrayU32FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * @returns {number}
     */
    edge_count() {
        const ret = wasm.areagraphv1_edge_count(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    edge_row_words() {
        const ret = wasm.areagraphv1_edge_row_words(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {Uint32Array}
     */
    edge_rows() {
        const ret = wasm.areagraphv1_edge_rows(this.__wbg_ptr);
        var v1 = getArrayU32FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * Areas the scan accepted but whose decode did not complete, as ids and
     * the error codes they failed with. An area that did not decode is named
     * rather than quietly missing from the graph.
     * @returns {Uint16Array}
     */
    failure_areas() {
        const ret = wasm.areagraphv1_failure_areas(this.__wbg_ptr);
        var v1 = getArrayU16FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 2, 2);
        return v1;
    }
    /**
     * @returns {string[]}
     */
    failure_codes() {
        const ret = wasm.areagraphv1_failure_codes(this.__wbg_ptr);
        var v1 = getArrayJsValueFromWasm0(ret[0], ret[1]);
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * How many of those the discovery scan accepted as field areas.
     * @returns {number}
     */
    listed_area_count() {
        const ret = wasm.areagraphv1_listed_area_count(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    node_count() {
        const ret = wasm.areagraphv1_node_count(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * Every node's distinct event indices, in node order. An event names no
     * destination, so it is here and not among the edges.
     * @returns {Uint32Array}
     */
    node_events() {
        const ret = wasm.areagraphv1_node_events(this.__wbg_ptr);
        var v1 = getArrayU32FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * @returns {number}
     */
    node_row_words() {
        const ret = wasm.areagraphv1_node_row_words(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {Uint32Array}
     */
    node_rows() {
        const ret = wasm.areagraphv1_node_rows(this.__wbg_ptr);
        var v1 = getArrayU32FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * Direct destinations no accepted descriptor claims.
     * @returns {Uint16Array}
     */
    unlisted_destinations() {
        const ret = wasm.areagraphv1_unlisted_destinations(this.__wbg_ptr);
        var v1 = getArrayU16FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 2, 2);
        return v1;
    }
    /**
     * Listed areas no direct gate anywhere points at.
     * @returns {Uint16Array}
     */
    unreached_areas() {
        const ret = wasm.areagraphv1_unreached_areas(this.__wbg_ptr);
        var v1 = getArrayU16FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 2, 2);
        return v1;
    }
}
if (Symbol.dispose) AreaGraphV1.prototype[Symbol.dispose] = AreaGraphV1.prototype.free;

export class AreaSpawnToggleV1 {
    static __wrap(ptr) {
        const obj = Object.create(AreaSpawnToggleV1.prototype);
        obj.__wbg_ptr = ptr;
        AreaSpawnToggleV1Finalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        AreaSpawnToggleV1Finalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_areaspawntogglev1_free(ptr, 0);
    }
    /**
     * @returns {number}
     */
    change_bytes() {
        const ret = wasm.areaspawntogglev1_change_bytes(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    change_count() {
        const ret = wasm.areaspawntogglev1_change_count(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * row, column, index before, index after, for every rewritten cell.
     * @returns {Uint8Array}
     */
    changes() {
        const ret = wasm.areaspawntogglev1_changes(this.__wbg_ptr);
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * trigger, subtract, left, top, columns, rows. An unrecognised trigger
     * leaves the block empty, which is C22F9F returning without writing and
     * not a refusal.
     * @returns {Uint8Array}
     */
    header() {
        const ret = wasm.areaspawntogglev1_header(this.__wbg_ptr);
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * @returns {number}
     */
    header_words() {
        const ret = wasm.areaspawntogglev1_header_words(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * The plane's metatile indices after the toggle, row-major. A rewritten
     * cell also loses its flip bits, because C22F9F writes the whole word.
     * @returns {Uint8Array}
     */
    toggled_indices() {
        const ret = wasm.areaspawntogglev1_toggled_indices(this.__wbg_ptr);
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
}
if (Symbol.dispose) AreaSpawnToggleV1.prototype[Symbol.dispose] = AreaSpawnToggleV1.prototype.free;

export class Decoder {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        DecoderFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_decoder_free(ptr, 0);
    }
    /**
     * The group table: 512 rows of three combatant ids, in row order.
     *
     * A group placement record names cells but no id; its combatants come
     * from here. Which row a record selects is built from state this port
     * does not decode, so the table is exposed as the structure it is rather
     * than joined to a record.
     * @returns {Uint8Array}
     */
    actor_group_table() {
        const ret = wasm.decoder_actor_group_table(this.__wbg_ptr);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * How many animated-tile frames this area declares. One means the area has
     * no animated tiles, or declares none this port can drive.
     * @param {number} area_id
     * @returns {number}
     */
    animation_frames(area_id) {
        const ret = wasm.decoder_animation_frames(this.__wbg_ptr, area_id);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return ret[0];
    }
    /**
     * One multi-part boss's body: the constructor its selector reaches and
     * the part program that constructor loads.
     *
     * An id whose record names a sprite still answers here if it also has a
     * constructor - one does - because the two are separate facts about the
     * same record. An id that reaches no filled vtable slot is an invalid
     * context, not an empty body.
     * @param {number} id
     * @returns {EntityBossV1}
     */
    boss_body(id) {
        const ret = wasm.decoder_boss_body(this.__wbg_ptr, id);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return EntityBossV1.__wrap(ret[0]);
    }
    /**
     * The fixed `$C4:F800` frame images, as three fifteen-colour
     * sub-palette-0 frames followed by the three sub-palette-1 colours the
     * same builder commits. The builder reads no area, phase or palette set,
     * so this takes no argument.
     * @returns {Uint16Array}
     */
    c4_palette_frames() {
        const ret = wasm.decoder_c4_palette_frames(this.__wbg_ptr);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v1 = getArrayU16FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 2, 2);
        return v1;
    }
    /**
     * @returns {string}
     */
    capabilities() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.decoder_capabilities(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * The actors one area places, in script order.
     *
     * This is the pre-spawn progression every earlier domain decodes: the
     * records whose spawn window admits an all-zero progression, plus the
     * event-flag records no ROM-only decode can decide. It does not resolve a
     * group's combatant ids, which come from a table this port has not yet
     * proven.
     * @param {number} area_id
     * @returns {AreaActorsV1}
     */
    decode_actors(area_id) {
        const ret = wasm.decoder_decode_actors(this.__wbg_ptr, area_id);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return AreaActorsV1.__wrap(ret[0]);
    }
    /**
     * One area's placed actors, with the sprites they stand in.
     *
     * This is the join the placement script and the sprite banks were missing
     * between them: an entity id reaches the 36-byte record at `$D1:0000`,
     * whose `+$00` is the animation id and `+$01` the palette group. The pose
     * is the object's spawn state - animation 0, palette variant 0, and the
     * direction the record's own facing bits quantise to - because that is
     * what the init path leaves in the object record, not because it is a
     * convenient default.
     *
     * A record that names no drawable sprite is reported with the reason.
     * @param {number} area_id
     * @returns {AreaActorSpritesV1}
     */
    decode_area_actor_sprites(area_id) {
        const ret = wasm.decoder_decode_area_actor_sprites(this.__wbg_ptr, area_id);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return AreaActorSpritesV1.__wrap(ret[0]);
    }
    /**
     * The whole-ROM field-area connectivity graph.
     *
     * One node per descriptor the scan accepts, one edge per direct gate,
     * and every ordinary directory entry with whether any scripted cell
     * names it. Areas carrying conditional layout patches are scanned once
     * per layout the ROM's own tests can select, so a gate reports whether
     * it exists in all of them.
     * @returns {AreaGraphV1}
     */
    decode_area_graph() {
        const ret = wasm.decoder_decode_area_graph(this.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return AreaGraphV1.__wrap(ret[0]);
    }
    /**
     * Decodes one area at one clock phase and one animated-tile frame. Which (area, phase) pairs a release
     * may show is decided by its published coverage manifests, not here: this
     * decodes any phase the palette handlers implement and fails closed on the
     * rest.
     * @param {number} area_id
     * @param {number} phase
     * @param {number} frame
     * @param {number} step
     * @returns {StaticBgMapStateV1}
     */
    decode_bg_map(area_id, phase, frame, step) {
        const ret = wasm.decoder_decode_bg_map(this.__wbg_ptr, area_id, phase, frame, step);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return StaticBgMapStateV1.__wrap(ret[0]);
    }
    /**
     * One plane's C11776 branch families and C11955 corner masks.
     *
     * Which plane C11239 walks is object field $000E, preserved by the
     * caller's Z flag, so the plane is the caller's to name and not
     * something the layout decides. Plane 0 is BG1 and plane 1 is BG2.
     * @param {number} area_id
     * @param {number} plane
     * @returns {AreaCollisionV1}
     */
    decode_collision(area_id, plane) {
        const ret = wasm.decoder_decode_collision(this.__wbg_ptr, area_id, plane);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return AreaCollisionV1.__wrap(ret[0]);
    }
    /**
     * The area's transition surface: every scripted cell its layout carries,
     * resolved through C22DDE and C22941, and every ordinary directory entry
     * that names this area as a destination.
     *
     * The scan runs on the pre-spawn layout, which is where C24880 itself
     * runs. Layout patches change which cells exist, so this is the all-zero
     * progression and not a claim about any other.
     * @param {number} area_id
     * @returns {AreaGatesV1}
     */
    decode_gates(area_id) {
        const ret = wasm.decoder_decode_gates(this.__wbg_ptr, area_id);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return AreaGatesV1.__wrap(ret[0]);
    }
    /**
     * C22F9F's post-load toggle at one spawn cell on one plane.
     *
     * The spawn is the caller's because which entrance a player took is live
     * state. The entrances an area has are not: `decode_gates` reports them,
     * and each names a plane and a cell. A spawn outside the layout, or one
     * whose block would run off it, is refused rather than clipped.
     * @param {number} area_id
     * @param {number} plane
     * @param {number} spawn_x
     * @param {number} spawn_y
     * @returns {AreaSpawnToggleV1}
     */
    decode_spawn_toggle(area_id, plane, spawn_x, spawn_y) {
        const ret = wasm.decoder_decode_spawn_toggle(this.__wbg_ptr, area_id, plane, spawn_x, spawn_y);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return AreaSpawnToggleV1.__wrap(ret[0]);
    }
    /**
     * Every animation id the sprite banks name, and every animation set.
     *
     * This is the catalogue, not the pixels: walking an id's programs and
     * decoding a pose are separate calls, because either costs far more than
     * listing what exists and neither is needed to browse it.
     * @returns {SpriteCatalogV1}
     */
    decode_sprite_catalog() {
        const ret = wasm.decoder_decode_sprite_catalog(this.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return SpriteCatalogV1.__wrap(ret[0]);
    }
    /**
     * Decodes one frame of one animation id into cells, VRAM jobs and pixels.
     *
     * `pose_word` and `gate` are spawn state, not properties of the id: the
     * first picks the object's OBJ-VRAM slot and the second decides which
     * cells are visible. Neither changes which tiles are fetched, so a caller
     * with no live object passes what the traced ones carried.
     * @param {number} anim_id
     * @param {number} frame
     * @param {number} pose_word
     * @param {number} gate
     * @param {boolean} include_hidden
     * @returns {SpritePoseV1}
     */
    decode_sprite_pose(anim_id, frame, pose_word, gate, include_hidden) {
        const ret = wasm.decoder_decode_sprite_pose(this.__wbg_ptr, anim_id, frame, pose_word, gate, include_hidden);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return SpritePoseV1.__wrap(ret[0]);
    }
    /**
     * Decodes the whole dialog store: every stored run in bank order, the
     * 3,049 shared phrase records, and every named-entity string.
     *
     * Continuation references are handed over as references, not inlined.
     * One phrase is commonly named from many runs, and flattening it here
     * would both multiply the payload and lose the fact that they are the
     * same stored object.
     * @returns {TextStoreV1}
     */
    decode_text_store() {
        const ret = wasm.decoder_decode_text_store(this.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return TextStoreV1.__wrap(ret[0]);
    }
    dispose() {
        wasm.decoder_dispose(this.__wbg_ptr);
    }
    /**
     * Every frame of one animation of one entity id, facing one quadrant.
     *
     * The same rows `entity_poses` writes, one per frame instead of one per
     * record, so the reader on the other side is the same one. `quadrant` is a
     * placement record's two facing bits, which resolve to a direction and a
     * mirror - not a bare direction, or the mirrored member of the left/right
     * pair could not be asked for.
     * @param {number} id
     * @param {number} animation
     * @param {number} quadrant
     * @returns {EntityPosesV1}
     */
    entity_animation_poses(id, animation, quadrant) {
        const ret = wasm.decoder_entity_animation_poses(this.__wbg_ptr, id, animation, quadrant);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return EntityPosesV1.__wrap(ret[0]);
    }
    /**
     * What one entity id's record says it draws as: its `+$00` and `+$01`,
     * the large-HP curve bit, and which of the three classifications those
     * make. The codes match `placement_rows`' refusal column.
     * @param {number} id
     * @returns {Uint32Array}
     */
    entity_appearance(id) {
        const ret = wasm.decoder_entity_appearance(this.__wbg_ptr, id);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v1 = getArrayU32FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * Who this cartridge places, and where.
     *
     * One row per entity id, plus one row per (entity, area) pair. The two
     * counts a row carries are counted in different contexts and are never
     * added: records naming an id over the whole script, which is
     * progression-independent, and group cells resolving to it at the
     * all-zero pre-spawn progression, because two of the group row's three
     * selectors are bytes of that window.
     *
     * This reads no ROM address the placement and group decodes did not
     * already read, so it carries no domain of its own; what stands in place
     * of one is that its totals reconcile with theirs.
     * @returns {EntityCensusV1}
     */
    entity_census() {
        const ret = wasm.decoder_entity_census(this.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return EntityCensusV1.__wrap(ret[0]);
    }
    /**
     * The 16 BGR555 words of one palette group's variant.
     *
     * Colour 0 is the shared OBJ transparent slot and comes back zero. These
     * are the ROM words: the loader passes each through a transform picked
     * from the day/night phase before it reaches CGRAM.
     * @param {number} group
     * @param {number} variant
     * @returns {Uint16Array}
     */
    entity_palette(group, variant) {
        const ret = wasm.decoder_entity_palette(this.__wbg_ptr, group, variant);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v1 = getArrayU16FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 2, 2);
        return v1;
    }
    /**
     * Every entity id's spawn pose, facing one direction.
     *
     * The same resolution a placed actor gets - animation 0, its first frame,
     * palette variant 0, and the same refusals - without the placement. Each
     * pose carries its own OBJ CHR, because one card is one PPU pass.
     * @param {number} direction
     * @returns {EntityPosesV1}
     */
    entity_poses(direction) {
        const ret = wasm.decoder_entity_poses(this.__wbg_ptr, direction);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return EntityPosesV1.__wrap(ret[0]);
    }
    /**
     * @param {Uint8Array} rom
     */
    constructor(rom) {
        const ptr0 = passArray8ToWasm0(rom, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.decoder_new(ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        this.__wbg_ptr = ret[0];
        DecoderFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * @returns {number}
     */
    owned_rom_bytes() {
        const ret = wasm.decoder_owned_rom_bytes(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * How many palette-animation steps this area declares. One means it has no
     * migrated colour-rotation band.
     * @param {number} area_id
     * @returns {number}
     */
    palette_steps(area_id) {
        const ret = wasm.decoder_palette_steps(this.__wbg_ptr, area_id);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return ret[0] >>> 0;
    }
    /**
     * Every progression state this area's placement script can tell apart.
     *
     * Flattened as `count`, then that many `(variable, nibble)` byte pairs,
     * per class in enumeration order. A class carrying no pair is an area
     * whose placements read no progression at all. These are contexts, not
     * states: the 256-byte array is never enumerated, only the equivalence
     * classes the script's own windows carve out of it.
     * @param {number} area_id
     * @returns {Uint8Array}
     */
    progression_classes(area_id) {
        const ret = wasm.decoder_progression_classes(this.__wbg_ptr, area_id);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * Which records each of this area's progression classes admits, as one
     * liveness code per record per class, classes in enumeration order.
     *
     * 0 retired, 1 live, 2 undecidable - the answer an event-flag record gets,
     * because the flag store is runtime state the ROM does not carry.
     * @param {number} area_id
     * @returns {Uint8Array}
     */
    progression_liveness(area_id) {
        const ret = wasm.decoder_progression_liveness(this.__wbg_ptr, area_id);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * @returns {number}
     */
    sprite_animation_row_words() {
        const ret = wasm.decoder_sprite_animation_row_words(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * Every animation of one id, in every direction, with its program walked.
     *
     * Nine words per row: the animation number and direction, the program
     * entry and sequence cursor, how many frames it emits, how many sequence
     * bytes and video frames it spans, why the walk stopped, and a bitmask of
     * what it hit that a caller must not read past.
     * @param {number} anim_id
     * @returns {Uint32Array}
     */
    sprite_animations(anim_id) {
        const ret = wasm.decoder_sprite_animations(this.__wbg_ptr, anim_id);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v1 = getArrayU32FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * @returns {number}
     */
    sprite_frame_row_words() {
        const ret = wasm.decoder_sprite_frame_row_words(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * The frames one animation emits, in order.
     *
     * Eight words per row: the frame's ordinal, the opcode's address and
     * value, the frame number it draws, how many video frames it is held
     * for, which byte of the sequence it came from, how many bytes that took,
     * and the flip flags the 6-bit encoding carries.
     * @param {number} anim_id
     * @param {number} number
     * @param {number} direction
     * @returns {Uint32Array}
     */
    sprite_frames(anim_id, number, direction) {
        const ret = wasm.decoder_sprite_frames(this.__wbg_ptr, anim_id, number, direction);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v1 = getArrayU32FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * The 16 BGR555 words of one OBJ sub-palette.
     *
     * Palettes 0 and 2 are `unsupported-context-v1`: no ROM source serves
     * them through this path, and a ramp in their place would be an
     * invention. The words are also not unconditionally the on-screen
     * colours - the copy passes through a transform picked from the
     * day/night phase.
     * @param {number} palette
     * @returns {Uint16Array}
     */
    sprite_obj_palette(palette) {
        const ret = wasm.decoder_sprite_obj_palette(this.__wbg_ptr, palette);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v1 = getArrayU16FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 2, 2);
        return v1;
    }
    /**
     * One OBJ sub-palette as RGB, three bytes per colour.
     *
     * The same words as `sprite_obj_palette` with the BGR555 channels
     * expanded into their own low bits, which is what the PPU does. Colour 0
     * is the transparent slot and comes back black.
     * @param {number} palette
     * @returns {Uint8Array}
     */
    sprite_obj_palette_rgb(palette) {
        const ret = wasm.decoder_sprite_obj_palette_rgb(this.__wbg_ptr, palette);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * @returns {Uint16Array}
     */
    supported_indices() {
        const ret = wasm.decoder_supported_indices(this.__wbg_ptr);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v1 = getArrayU16FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 2, 2);
        return v1;
    }
    /**
     * Which `$C4:B300` category each entity-naming control resolves through,
     * as pairs of control code and slot read out of each control's own load
     * site. Two words per pair.
     * @returns {Uint32Array}
     */
    text_control_slots() {
        const ret = wasm.decoder_text_control_slots(this.__wbg_ptr);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v1 = getArrayU32FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
}
if (Symbol.dispose) Decoder.prototype[Symbol.dispose] = Decoder.prototype.free;

/**
 * One multi-part boss's body: the constructor that builds it and the part
 * program it builds it from.
 *
 * No pixels, and not because the payload is trimmed: what a part *draws* -
 * bank-`$D7` cell shapes for kinds 0 and 1, the ordinary sprite loader for
 * kind 2, a BG1 tilemap for kind 3 - is not decoded anywhere in this port.
 */
export class EntityBossV1 {
    static __wrap(ptr) {
        const obj = Object.create(EntityBossV1.prototype);
        obj.__wbg_ptr = ptr;
        EntityBossV1Finalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        EntityBossV1Finalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_entitybossv1_free(ptr, 0);
    }
    /**
     * The hand-written routine the slot's `JML` names.
     * @returns {number}
     */
    address() {
        const ret = wasm.entitybossv1_address(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * Which entry of the `$D0:0000` table holds the program, and where its
     * compressed stream starts.
     * @returns {number}
     */
    blob() {
        const ret = wasm.entitybossv1_blob(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    blob_bytes() {
        const ret = wasm.entitybossv1_blob_bytes(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    blob_source() {
        const ret = wasm.entitybossv1_blob_source(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    entity_id() {
        const ret = wasm.entitybossv1_entity_id(this.__wbg_ptr);
        return ret;
    }
    /**
     * Which part-record dialect the pose entries are in.
     * @returns {number}
     */
    format() {
        const ret = wasm.entitybossv1_format(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {boolean}
     */
    inherited() {
        const ret = wasm.entitybossv1_inherited(this.__wbg_ptr);
        return ret !== 0;
    }
    /**
     * @returns {number}
     */
    inherited_from() {
        const ret = wasm.entitybossv1_inherited_from(this.__wbg_ptr);
        return ret;
    }
    /**
     * `$009C` - the per-frame method stub it installs, and where that lands.
     * The two tables' cross-check, carried so a reader can see it.
     * @returns {number}
     */
    method_stub() {
        const ret = wasm.entitybossv1_method_stub(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    method_target() {
        const ret = wasm.entitybossv1_method_target(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    pose_count() {
        const ret = wasm.entitybossv1_pose_count(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    pose_row_words() {
        const ret = wasm.entitybossv1_pose_row_words(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * One row per pose: its index, its frame count, its part count, the first
     * frame's tween length, and how many of that frame's parts fall into each
     * of the four kinds.
     * @returns {Uint32Array}
     */
    pose_rows() {
        const ret = wasm.entitybossv1_pose_rows(this.__wbg_ptr);
        var v1 = getArrayU32FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * The byte `$D3:00B8` reads for this id, which picks the vtable slot.
     * @returns {number}
     */
    selector() {
        const ret = wasm.entitybossv1_selector(this.__wbg_ptr);
        return ret;
    }
    /**
     * `$018A`/`$018C`/`$018E` - the three ascending bounds that sort a part's
     * class byte into one of four kinds.
     * @returns {Uint16Array}
     */
    thresholds() {
        const ret = wasm.entitybossv1_thresholds(this.__wbg_ptr);
        var v1 = getArrayU16FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 2, 2);
        return v1;
    }
}
if (Symbol.dispose) EntityBossV1.prototype[Symbol.dispose] = EntityBossV1.prototype.free;

/**
 * Who the cartridge places, and where.
 */
export class EntityCensusV1 {
    static __wrap(ptr) {
        const obj = Object.create(EntityCensusV1.prototype);
        obj.__wbg_ptr = ptr;
        EntityCensusV1Finalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        EntityCensusV1Finalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_entitycensusv1_free(ptr, 0);
    }
    /**
     * Areas whose descriptor or script could not be read. Counted rather than
     * skipped: a census that dropped a room would understate every id in it.
     * @returns {number}
     */
    areas_refused() {
        const ret = wasm.entitycensusv1_areas_refused(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    areas_walked() {
        const ret = wasm.entitycensusv1_areas_walked(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    group_unknown() {
        const ret = wasm.entitycensusv1_group_unknown(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * Actors naming an id past the end of the entity table, which therefore
     * have no row. Both are zero on the supported cartridge.
     * @returns {number}
     */
    named_unknown() {
        const ret = wasm.entitycensusv1_named_unknown(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    row_count() {
        const ret = wasm.entitycensusv1_row_count(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    row_row_words() {
        const ret = wasm.entitycensusv1_row_row_words(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * One row per id in the entity table: the id, how many records name it
     * over the whole script, how many group cells resolve to it at the
     * pre-spawn progression, and the areas behind each count. The two counts
     * are counted in different contexts and are never added together.
     * @returns {Uint32Array}
     */
    rows() {
        const ret = wasm.entitycensusv1_rows(this.__wbg_ptr);
        var v1 = getArrayU32FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * @returns {number}
     */
    site_count() {
        const ret = wasm.entitycensusv1_site_count(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    site_row_words() {
        const ret = wasm.entitycensusv1_site_row_words(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * Every (entity, area) pair, in id then area order, with the same two
     * counts for that one room.
     * @returns {Uint32Array}
     */
    site_rows() {
        const ret = wasm.entitycensusv1_site_rows(this.__wbg_ptr);
        var v1 = getArrayU32FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
}
if (Symbol.dispose) EntityCensusV1.prototype[Symbol.dispose] = EntityCensusV1.prototype.free;

/**
 * Every entity id's spawn pose, as the objects that would draw it.
 */
export class EntityPosesV1 {
    static __wrap(ptr) {
        const obj = Object.create(EntityPosesV1.prototype);
        obj.__wbg_ptr = ptr;
        EntityPosesV1Finalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        EntityPosesV1Finalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_entityposesv1_free(ptr, 0);
    }
    /**
     * Every pose's own OBJ CHR, concatenated. Each pose's run starts at its
     * own `chrVramWord` and its tile names index from there, because a card
     * is one PPU pass and shares its OBJ region with nothing.
     * @returns {Uint8Array}
     */
    chr() {
        const ret = wasm.entityposesv1_chr(this.__wbg_ptr);
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * The direction every pose here faces, and whether it was mirrored to
     * get there. A payload property, not a row's: one call composes one
     * facing. Asked for as a quadrant both are the answer; asked for as a
     * direction, the mirror is off.
     * @returns {number}
     */
    direction() {
        const ret = wasm.entityposesv1_direction(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {boolean}
     */
    mirrored() {
        const ret = wasm.entityposesv1_mirrored(this.__wbg_ptr);
        return ret !== 0;
    }
    /**
     * @returns {number}
     */
    no_value() {
        const ret = wasm.entityposesv1_no_value(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    obj_priority() {
        const ret = wasm.entityposesv1_obj_priority(this.__wbg_ptr);
        return ret;
    }
    /**
     * The `$2101` and the OAM priority these are drawn with - the area
     * route's too, so a card and the map cannot drift apart.
     * @returns {number}
     */
    obj_sel() {
        const ret = wasm.entityposesv1_obj_sel(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    object_count() {
        const ret = wasm.entityposesv1_object_count(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    object_row_words() {
        const ret = wasm.entityposesv1_object_row_words(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * Every pose's OAM entries, front-most first.
     * @returns {Uint32Array}
     */
    object_rows() {
        const ret = wasm.entityposesv1_object_rows(this.__wbg_ptr);
        var v1 = getArrayU32FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * Sixteen BGR555 words per drawable pose. Colour 0 is the shared OBJ
     * transparent slot and is zero.
     * @returns {Uint16Array}
     */
    palettes() {
        const ret = wasm.entityposesv1_palettes(this.__wbg_ptr);
        var v1 = getArrayU16FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 2, 2);
        return v1;
    }
    /**
     * @returns {number}
     */
    pose_count() {
        const ret = wasm.entityposesv1_pose_count(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    pose_row_words() {
        const ret = wasm.entityposesv1_pose_row_words(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * One row per entity id: the id, its animation id, palette group and
     * frame, the rectangle its objects cover, where its OAM entries, its CHR
     * and its sixteen palette words sit in the flat arrays, the OBJ-VRAM word
     * its CHR belongs at, the flips, and why it draws nothing. Exactly one of
     * the object count and the refusal is meaningful.
     * @returns {Uint32Array}
     */
    pose_rows() {
        const ret = wasm.entityposesv1_pose_rows(this.__wbg_ptr);
        var v1 = getArrayU32FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
}
if (Symbol.dispose) EntityPosesV1.prototype[Symbol.dispose] = EntityPosesV1.prototype.free;

/**
 * The catalogue of everything the sprite banks can draw.
 *
 * One row per animation id, one per animation set, and the sets' records in
 * one flat array. Walking an id's programs and decoding a pose are separate
 * calls, because both cost far more than the catalogue and neither is needed
 * to list what exists.
 */
export class SpriteCatalogV1 {
    static __wrap(ptr) {
        const obj = Object.create(SpriteCatalogV1.prototype);
        obj.__wbg_ptr = ptr;
        SpriteCatalogV1Finalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        SpriteCatalogV1Finalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_spritecatalogv1_free(ptr, 0);
    }
    /**
     * @returns {number}
     */
    no_value() {
        const ret = wasm.spritecatalogv1_no_value(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    record_count() {
        const ret = wasm.spritecatalogv1_record_count(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    record_row_words() {
        const ret = wasm.spritecatalogv1_record_row_words(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * Every set's records, in set order: the program entry and one sequence
     * pointer per direction.
     * @returns {Uint32Array}
     */
    record_rows() {
        const ret = wasm.spritecatalogv1_record_rows(this.__wbg_ptr);
        var v1 = getArrayU32FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * @returns {number}
     */
    script_count() {
        const ret = wasm.spritecatalogv1_script_count(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    script_row_words() {
        const ret = wasm.spritecatalogv1_script_row_words(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * Every animation id: the id, its frame script's bank and frame-pointer
     * table, the CHR bank that script selects, how many frames the table
     * holds, and which set the id resolves to.
     * @returns {Uint32Array}
     */
    script_rows() {
        const ret = wasm.spritecatalogv1_script_rows(this.__wbg_ptr);
        var v1 = getArrayU32FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * @returns {number}
     */
    set_count() {
        const ret = wasm.spritecatalogv1_set_count(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * Every animation id that reaches each set, indexed by the set row.
     * @returns {Uint32Array}
     */
    set_ids() {
        const ret = wasm.spritecatalogv1_set_ids(this.__wbg_ptr);
        var v1 = getArrayU32FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * @returns {number}
     */
    set_row_words() {
        const ret = wasm.spritecatalogv1_set_row_words(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * Every animation set: its base, both header bytes, the sequence
     * encoding its header selects, the visibility-gate mask, and where its
     * records and its ids sit in the two flat arrays.
     * @returns {Uint32Array}
     */
    set_rows() {
        const ret = wasm.spritecatalogv1_set_rows(this.__wbg_ptr);
        var v1 = getArrayU32FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
}
if (Symbol.dispose) SpriteCatalogV1.prototype[Symbol.dispose] = SpriteCatalogV1.prototype.free;

/**
 * One decoded pose: its cells, the VRAM jobs they flush as, and the
 * composited pixels.
 */
export class SpritePoseV1 {
    static __wrap(ptr) {
        const obj = Object.create(SpritePoseV1.prototype);
        obj.__wbg_ptr = ptr;
        SpritePoseV1Finalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        SpritePoseV1Finalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_spriteposev1_free(ptr, 0);
    }
    /**
     * @returns {number}
     */
    batch_count() {
        const ret = wasm.spriteposev1_batch_count(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    batch_row_words() {
        const ret = wasm.spriteposev1_batch_row_words(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * Every flush: both VMADDs, and where its half of each tile list sits.
     * @returns {Uint32Array}
     */
    batch_rows() {
        const ret = wasm.spriteposev1_batch_rows(this.__wbg_ptr);
        var v1 = getArrayU32FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * @returns {number}
     */
    bitmap_height() {
        const ret = wasm.spriteposev1_bitmap_height(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    bitmap_width() {
        const ret = wasm.spriteposev1_bitmap_width(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * The composite's signed offset from the object's origin.
     * @returns {number}
     */
    bitmap_x() {
        const ret = wasm.spriteposev1_bitmap_x(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    bitmap_y() {
        const ret = wasm.spriteposev1_bitmap_y(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    cell_count() {
        const ret = wasm.spriteposev1_cell_count(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    cell_row_words() {
        const ret = wasm.spriteposev1_cell_row_words(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * Every cell: its index, its raw byte, its signed pixel offsets, the
     * packed flip and visibility flags, its OAM tile word - `no_value()`
     * for a cell the gate hid - and its four CHR offsets in the sub-tile
     * order TL, TR, BL, BR, all four `no_value()` for a cell the tile walk
     * never reached.
     * @returns {Uint32Array}
     */
    cell_rows() {
        const ret = wasm.spriteposev1_cell_rows(this.__wbg_ptr);
        var v1 = getArrayU32FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * Where the frame-pointer table sent the walk.
     * @returns {number}
     */
    descriptor() {
        const ret = wasm.spriteposev1_descriptor(this.__wbg_ptr);
        return ret;
    }
    /**
     * The hitbox byte, which has no effect on graphics.
     * @returns {number}
     */
    extent() {
        const ret = wasm.spriteposev1_extent(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    flags() {
        const ret = wasm.spriteposev1_flags(this.__wbg_ptr);
        return ret;
    }
    /**
     * Whether the pose composited to anything at all.
     * @returns {boolean}
     */
    has_pixels() {
        const ret = wasm.spriteposev1_has_pixels(this.__wbg_ptr);
        return ret !== 0;
    }
    /**
     * Sub-tiles 0 and 1 of every cell, in the order the DMA lays them down.
     * @returns {Uint16Array}
     */
    list_a() {
        const ret = wasm.spriteposev1_list_a(this.__wbg_ptr);
        var v1 = getArrayU16FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 2, 2);
        return v1;
    }
    /**
     * @returns {Uint16Array}
     */
    list_b() {
        const ret = wasm.spriteposev1_list_b(this.__wbg_ptr);
        var v1 = getArrayU16FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 2, 2);
        return v1;
    }
    /**
     * The composite as 4bpp palette indices, row major; 0 is transparent.
     *
     * Indices rather than colour, because an object's palette is spawn state
     * and two objects running the same animation do not share it.
     * @returns {Uint8Array}
     */
    pixels() {
        const ret = wasm.spriteposev1_pixels(this.__wbg_ptr);
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * Whether the CHR walk stopped on its ceiling rather than its count.
     * @returns {boolean}
     */
    truncated() {
        const ret = wasm.spriteposev1_truncated(this.__wbg_ptr);
        return ret !== 0;
    }
}
if (Symbol.dispose) SpritePoseV1.prototype[Symbol.dispose] = SpritePoseV1.prototype.free;

export class StaticBgMapStateV1 {
    static __wrap(ptr) {
        const obj = Object.create(StaticBgMapStateV1.prototype);
        obj.__wbg_ptr = ptr;
        StaticBgMapStateV1Finalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        StaticBgMapStateV1Finalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_staticbgmapstatev1_free(ptr, 0);
    }
    /**
     * @returns {Uint16Array}
     */
    bg1_map() {
        const ret = wasm.staticbgmapstatev1_bg1_map(this.__wbg_ptr);
        var v1 = getArrayU16FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 2, 2);
        return v1;
    }
    /**
     * @returns {Uint16Array}
     */
    bg2_map() {
        const ret = wasm.staticbgmapstatev1_bg2_map(this.__wbg_ptr);
        var v1 = getArrayU16FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 2, 2);
        return v1;
    }
    /**
     * @returns {Uint8Array}
     */
    cgram() {
        const ret = wasm.staticbgmapstatev1_cgram(this.__wbg_ptr);
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * @returns {number}
     */
    fixed_color_bgr555() {
        const ret = wasm.staticbgmapstatev1_fixed_color_bgr555(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {boolean}
     */
    has_bg2_map() {
        const ret = wasm.staticbgmapstatev1_has_bg2_map(this.__wbg_ptr);
        return ret !== 0;
    }
    /**
     * @returns {number}
     */
    map_height() {
        const ret = wasm.staticbgmapstatev1_map_height(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    map_width() {
        const ret = wasm.staticbgmapstatev1_map_width(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {Uint8Array}
     */
    registers() {
        const ret = wasm.staticbgmapstatev1_registers(this.__wbg_ptr);
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * @returns {Uint8Array}
     */
    tiles() {
        const ret = wasm.staticbgmapstatev1_tiles(this.__wbg_ptr);
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * @returns {number}
     */
    tiles_vram_word() {
        const ret = wasm.staticbgmapstatev1_tiles_vram_word(this.__wbg_ptr);
        return ret;
    }
}
if (Symbol.dispose) StaticBgMapStateV1.prototype[Symbol.dispose] = StaticBgMapStateV1.prototype.free;

/**
 * The decoded dialog store: stored runs, the shared phrase records they
 * reference, and the strings a control code substitutes.
 *
 * Items are handed over as one flat array that every row indexes into, so
 * the browser reads 117,000 codepoints without building an object each.
 */
export class TextStoreV1 {
    static __wrap(ptr) {
        const obj = Object.create(TextStoreV1.prototype);
        obj.__wbg_ptr = ptr;
        TextStoreV1Finalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        TextStoreV1Finalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_textstorev1_free(ptr, 0);
    }
    /**
     * @returns {number}
     */
    block_count() {
        const ret = wasm.textstorev1_block_count(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    block_row_words() {
        const ret = wasm.textstorev1_block_row_words(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * Every stored block: bank, first and last bit within its region, the
     * alignment padding before it, how many index entries name it, how many
     * runs it stores, how many codepoints those hold, the opcode before its
     * terminator - which is what says whether the block stored next is its
     * branch arm or one of its table slots - and how this block itself can be
     * entered. That opcode is `no_argument()` for a block with fewer than two
     * instructions.
     *
     * The entry class is not derivable from the rest of the row: whether an
     * unnamed block is a branch arm, a table slot or an orphan depends on the
     * whole run of blocks before it, so it is decided per region and reported
     * rather than left for a caller to re-derive from neighbouring rows. Nor
     * is the opcode it was entered from: a table slot is entered from the
     * block before the whole run of slots, which is not the row above it.
     * @returns {Uint32Array}
     */
    block_rows() {
        const ret = wasm.textstorev1_block_rows(this.__wbg_ptr);
        var v1 = getArrayU32FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * @returns {number}
     */
    continuation_flag() {
        const ret = wasm.textstorev1_continuation_flag(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    event_row_words() {
        const ret = wasm.textstorev1_event_row_words(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * Index entries that landed inside a block rather than on its first bit.
     * A correct walk reports zero.
     * @returns {number}
     */
    interior_entry_count() {
        const ret = wasm.textstorev1_interior_entry_count(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * Every decoded item, indexed by the offset and count on each row.
     * @returns {Uint32Array}
     */
    items() {
        const ret = wasm.textstorev1_items(this.__wbg_ptr);
        var v1 = getArrayU32FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * @returns {number}
     */
    no_argument() {
        const ret = wasm.textstorev1_no_argument(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    record_count() {
        const ret = wasm.textstorev1_record_count(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    record_row_words() {
        const ret = wasm.textstorev1_record_row_words(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {Uint32Array}
     */
    record_rows() {
        const ret = wasm.textstorev1_record_rows(this.__wbg_ptr);
        var v1 = getArrayU32FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * @returns {number}
     */
    region_row_words() {
        const ret = wasm.textstorev1_region_row_words(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * The four stored regions: bank, first byte, last byte, end of the `$FF`
     * fill after it, and how many blocks it holds.
     * @returns {Uint32Array}
     */
    region_rows() {
        const ret = wasm.textstorev1_region_rows(this.__wbg_ptr);
        var v1 = getArrayU32FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * @returns {number}
     */
    run_count() {
        const ret = wasm.textstorev1_run_count(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * One run as the renderer sees it: phrases inlined, controls paired with
     * the codepoints that belong to them.
     *
     * Three words per event - kind, code, argument - where kind is 0 for a
     * glyph, 1 for a control, 2 for a `$25` directive and 3 for a name the
     * player typed, which lives in WRAM and is reported rather than
     * substituted. An absent argument is `no_argument()`.
     * @param {number} run
     * @returns {Uint32Array}
     */
    run_events(run) {
        const ret = wasm.textstorev1_run_events(this.__wbg_ptr, run);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v1 = getArrayU32FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * @returns {number}
     */
    run_row_words() {
        const ret = wasm.textstorev1_run_row_words(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {Uint32Array}
     */
    run_rows() {
        const ret = wasm.textstorev1_run_rows(this.__wbg_ptr);
        var v1 = getArrayU32FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * @returns {number}
     */
    string_count() {
        const ret = wasm.textstorev1_string_count(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    string_owner_total() {
        const ret = wasm.textstorev1_string_owner_total(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    string_row_words() {
        const ret = wasm.textstorev1_string_row_words(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {Uint32Array}
     */
    string_rows() {
        const ret = wasm.textstorev1_string_rows(this.__wbg_ptr);
        var v1 = getArrayU32FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * The merged byte extents the named-entity strings occupy, two words per
     * span. An editor has to own these whole, because one string is commonly
     * named from several places.
     * @returns {Uint32Array}
     */
    string_spans() {
        const ret = wasm.textstorev1_string_spans(this.__wbg_ptr);
        var v1 = getArrayU32FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * Blocks whose stored bits no index entry names, which are reached only
     * by falling through from the block before them.
     * @returns {number}
     */
    unnamed_block_count() {
        const ret = wasm.textstorev1_unnamed_block_count(this.__wbg_ptr);
        return ret >>> 0;
    }
}
if (Symbol.dispose) TextStoreV1.prototype[Symbol.dispose] = TextStoreV1.prototype.free;

/**
 * @returns {number}
 */
export function production_rom_length() {
    const ret = wasm.production_rom_length();
    return ret >>> 0;
}

/**
 * @returns {string}
 */
export function production_rom_sha256() {
    let deferred1_0;
    let deferred1_1;
    try {
        const ret = wasm.production_rom_sha256();
        deferred1_0 = ret[0];
        deferred1_1 = ret[1];
        return getStringFromWasm0(ret[0], ret[1]);
    } finally {
        wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
}

/**
 * @returns {boolean}
 */
export function static_codec_probe_v1() {
    const ret = wasm.static_codec_probe_v1();
    return ret !== 0;
}

/**
 * @param {Uint8Array} rom
 * @param {number} expected_length
 * @param {string} expected_sha256
 */
export function validate_rom_identity(rom, expected_length, expected_sha256) {
    const ptr0 = passArray8ToWasm0(rom, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passStringToWasm0(expected_sha256, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.validate_rom_identity(ptr0, len0, expected_length, ptr1, len1);
    if (ret[1]) {
        throw takeFromExternrefTable0(ret[0]);
    }
}
function __wbg_get_imports() {
    const import0 = {
        __proto__: null,
        __wbg_Error_408e67f47ca7b58b: function(arg0, arg1) {
            const ret = Error(getStringFromWasm0(arg0, arg1));
            return ret;
        },
        __wbg___wbindgen_throw_bb96b2010945f0bc: function(arg0, arg1) {
            throw new Error(getStringFromWasm0(arg0, arg1));
        },
        __wbindgen_cast_0000000000000001: function(arg0, arg1) {
            // Cast intrinsic for `Ref(String) -> Externref`.
            const ret = getStringFromWasm0(arg0, arg1);
            return ret;
        },
        __wbindgen_init_externref_table: function() {
            const table = wasm.__wbindgen_externrefs;
            const offset = table.grow(4);
            table.set(0, undefined);
            table.set(offset + 0, undefined);
            table.set(offset + 1, null);
            table.set(offset + 2, true);
            table.set(offset + 3, false);
        },
    };
    return {
        __proto__: null,
        "./sd3_core_bg.js": import0,
    };
}

const AreaActorSpritesV1Finalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_areaactorspritesv1_free(ptr, 1));
const AreaActorsV1Finalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_areaactorsv1_free(ptr, 1));
const AreaCollisionV1Finalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_areacollisionv1_free(ptr, 1));
const AreaGatesV1Finalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_areagatesv1_free(ptr, 1));
const AreaGraphV1Finalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_areagraphv1_free(ptr, 1));
const AreaSpawnToggleV1Finalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_areaspawntogglev1_free(ptr, 1));
const DecoderFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_decoder_free(ptr, 1));
const EntityBossV1Finalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_entitybossv1_free(ptr, 1));
const EntityCensusV1Finalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_entitycensusv1_free(ptr, 1));
const EntityPosesV1Finalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_entityposesv1_free(ptr, 1));
const SpriteCatalogV1Finalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_spritecatalogv1_free(ptr, 1));
const SpritePoseV1Finalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_spriteposev1_free(ptr, 1));
const StaticBgMapStateV1Finalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_staticbgmapstatev1_free(ptr, 1));
const TextStoreV1Finalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_textstorev1_free(ptr, 1));

function getArrayJsValueFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    const mem = getDataViewMemory0();
    const result = [];
    for (let i = ptr; i < ptr + 4 * len; i += 4) {
        result.push(wasm.__wbindgen_externrefs.get(mem.getUint32(i, true)));
    }
    wasm.__externref_drop_slice(ptr, len);
    return result;
}

function getArrayU16FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint16ArrayMemory0().subarray(ptr / 2, ptr / 2 + len);
}

function getArrayU32FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint32ArrayMemory0().subarray(ptr / 4, ptr / 4 + len);
}

function getArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

let cachedDataViewMemory0 = null;
function getDataViewMemory0() {
    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
    }
    return cachedDataViewMemory0;
}

function getStringFromWasm0(ptr, len) {
    return decodeText(ptr >>> 0, len);
}

let cachedUint16ArrayMemory0 = null;
function getUint16ArrayMemory0() {
    if (cachedUint16ArrayMemory0 === null || cachedUint16ArrayMemory0.byteLength === 0) {
        cachedUint16ArrayMemory0 = new Uint16Array(wasm.memory.buffer);
    }
    return cachedUint16ArrayMemory0;
}

let cachedUint32ArrayMemory0 = null;
function getUint32ArrayMemory0() {
    if (cachedUint32ArrayMemory0 === null || cachedUint32ArrayMemory0.byteLength === 0) {
        cachedUint32ArrayMemory0 = new Uint32Array(wasm.memory.buffer);
    }
    return cachedUint32ArrayMemory0;
}

let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function passArray8ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 1, 1) >>> 0;
    getUint8ArrayMemory0().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

function passStringToWasm0(arg, malloc, realloc) {
    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8ArrayMemory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }
    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = cachedTextEncoder.encodeInto(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function takeFromExternrefTable0(idx) {
    const value = wasm.__wbindgen_externrefs.get(idx);
    wasm.__externref_table_dealloc(idx);
    return value;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
const MAX_SAFARI_DECODE_BYTES = 2146435072;
let numBytesDecoded = 0;
function decodeText(ptr, len) {
    numBytesDecoded += len;
    if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
        cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
        cachedTextDecoder.decode();
        numBytesDecoded = len;
    }
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

const cachedTextEncoder = new TextEncoder();

if (!('encodeInto' in cachedTextEncoder)) {
    cachedTextEncoder.encodeInto = function (arg, view) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    };
}

let WASM_VECTOR_LEN = 0;

let wasmModule, wasmInstance, wasm;
function __wbg_finalize_init(instance, module) {
    wasmInstance = instance;
    wasm = instance.exports;
    wasmModule = module;
    cachedDataViewMemory0 = null;
    cachedUint16ArrayMemory0 = null;
    cachedUint32ArrayMemory0 = null;
    cachedUint8ArrayMemory0 = null;
    wasm.__wbindgen_start();
    return wasm;
}

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (!module.ok) {
            throw new Error(`failed to fetch Wasm: ${module.status} ${module.statusText} fetching '${module.url}'`);
        }

        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);
            } catch (e) {
                const validResponse = expectedResponseType(module.type);

                if (validResponse && module.headers.get('Content-Type') !== 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else { throw e; }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);
    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };
        } else {
            return instance;
        }
    }

    function expectedResponseType(type) {
        switch (type) {
            case 'basic': case 'cors': case 'default': return true;
        }
        return false;
    }
}

function initSync(module) {
    if (wasm !== undefined) return wasm;


    if (module !== undefined) {
        if (Object.getPrototypeOf(module) === Object.prototype) {
            ({module} = module)
        } else {
            console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
        }
    }

    const imports = __wbg_get_imports();
    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }
    const instance = new WebAssembly.Instance(module, imports);
    return __wbg_finalize_init(instance, module);
}

async function __wbg_init(module_or_path) {
    if (wasm !== undefined) return wasm;


    if (module_or_path !== undefined) {
        if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
            ({module_or_path} = module_or_path)
        } else {
            console.warn('using deprecated parameters for the initialization function; pass a single object instead')
        }
    }

    if (module_or_path === undefined) {
        module_or_path = new URL('sd3_core_bg.wasm', import.meta.url);
    }
    const imports = __wbg_get_imports();

    if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
        module_or_path = fetch(module_or_path);
    }

    const { instance, module } = await __wbg_load(await module_or_path, imports);

    return __wbg_finalize_init(instance, module);
}

export { initSync, __wbg_init as default };
