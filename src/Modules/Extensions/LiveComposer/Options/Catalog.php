<?php namespace Experiensa\Plugin\Modules\Extensions\LiveComposer\Options;


class Catalog
{
    public static function type($id = 'type', $default = 'cards'){
        return array(
            'label' => __('Type','experiensa'),
            'id'    => $id,
            'std'   => $default,
            'type'  => 'select',
            'choices' => array(
                array(
                    'label' => __( 'Cards', 'experiensa' ),
                    'value' => 'cards',
                ),
                array(
                    'label' => __( 'Pinterest', 'experiensa' ),
                    'value' => 'pinterest',
                ),
            ),
            'section' => 'styling'
        );
    }
    public static function elements($id = 'elements', $default = 'title price button destination duration themes country'){
        return array(
            'label' => __( 'Elements', 'experiensa' ),
            'id' => $id,
            'std' => $default,
            'type' => 'checkbox',
            'choices' => array(
                array(
                    'label' => __( 'Title', 'experiensa' ),
                    'value' => 'title',
                ),
                array(
                    'label' => __( 'Price', 'experiensa' ),
                    'value' => 'price',
                ),
                array(
                    'label' => __( 'Detail Button', 'experiensa' ),
                    'value' => 'detail_button',
                ),
                array(
                    'label' => __( 'Destination', 'experiensa' ),
                    'value' => 'destination',
                ),
                array(
                    'label' => __( 'Duration', 'experiensa' ),
                    'value' => 'duration',
                ),
                array(
                    'label' => __( 'Themes', 'experiensa' ),
                    'value' => 'themes',
                ),
                array(
                    'label' => __( 'Country', 'experiensa' ),
                    'value' => 'country',
                ),
                array(
                    'label' => __( 'Includes', 'experiensa' ),
                    'value' => 'includes',
                ),
                array(
                    'label' => __( 'Excludes', 'experiensa' ),
                    'value' => 'excludes',
                )
            ),
            'section' => 'styling',
        );
    }
    public static function filters($id = "filters",$default = "country themes"){
        return array(
            'label' => __( 'Filters to show', 'experiensa' ),
            'id' => $id,
            'std' => $default,
            'type' => 'checkbox',
            'choices' => array(
                array(
                    'label' => __( 'Category', 'experiensa' ),
                    'value' => 'category',
                ),
                array(
                    'label' => __( 'Country', 'experiensa' ),
                    'value' => 'country',
                ),
                array(
                    'label' => __( 'Destination', 'experiensa' ),
                    'value' => 'destination',
                ),
                array(
                    'label' => __( 'Themes', 'experiensa' ),
                    'value' => 'themes',
                ),
                array(
                    'label' => __( 'Includes', 'experiensa' ),
                    'value' => 'includes',
                ),
                array(
                    'label' => __( 'Excludes', 'experiensa' ),
                    'value' => 'excludes',
                )
            ),
            'section' => 'styling',
//            'tab' => __('Filters','experiensa')
        );
    }
}