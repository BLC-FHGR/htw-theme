<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

require_once($CFG->dirroot . '/theme/bootstrapbase/renderers.php');

/**
 * htwchur core renderers.
 *
 * @package    theme_htwchur
 * @copyright  2015 Frédéric Massart - FMCorz.net
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
class theme_htwchur_core_renderer extends theme_bootstrapbase_core_renderer {

    /**
     * Either returns the parent version of the header bar, or a version with the logo replacing the header.
     *
     * @since Moodle 2.9
     * @param array $headerinfo An array of header information, dependant on what type of header is being displayed. The following
     *                          array example is user specific.
     *                          heading => Override the page heading.
     *                          user => User object.
     *                          usercontext => user context.
     * @param int $headinglevel What level the 'h' tag will be.
     * @return string HTML for the header bar.
     */
    public function context_header($headerinfo = null, $headinglevel = 1) {
        $logotag = "";
//        if ($headinglevel == 1 && !empty($this->page->theme->settings->logo)) {
//            $logotag = html_writer::tag('div', '', array('class' => 'logo span4'));
//        }
        $html = $logotag . parent::context_header($headerinfo, $headinglevel);

        preg_replace( '/(div class="page-context-header)(")/', '${1} span8${2}', $html);

        return $html;
    }

    public function context_logo($headerinfo = null, $headinglevel = 1) {
        $logotag = "xx";
        if ($headinglevel == 1 && !empty($this->page->theme->settings->logo)) {
            $logotag = html_writer::tag('div', '', array('class' => 'logo'));
        }
        return $logotag;
    }
}
